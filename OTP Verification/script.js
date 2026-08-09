
const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");

dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());

const PORT = process.env.PORT || 5000;

const API_KEY = process.env.TWOFACTOR_API_KEY;

const OTP_API =
    "https://2factor.in/API/V1/OTP/SEND";


app.post("/api/send-otp", async (req, res) => {

    try {

        const { mobile } = req.body;

        if (!mobile) {

            return res.status(400).json({
                success: false,
                message: "Mobile number is required"
            });

        }


        if (!/^\+91[6-9]\d{9}$/.test(mobile)) {

            return res.status(400).json({
                success: false,
                message: "Invalid Indian mobile number"
            });

        }


        const response = await fetch(
            OTP_API,
            {
                method: "POST",

                headers: {
                    "X-API-Key": API_KEY,
                    "Content-Type": "application/json"
                },

                body: JSON.stringify({
                    to: mobile,
                    channel: "SMS",
                    template: "LOGIN_OTP"
                })
            }
        );


        const data = await response.json();


        if (!response.ok) {

            return res.status(response.status).json({
                success: false,
                message: data.message || "Unable to send OTP",
                data: data
            });

        }


        res.json({
            success: true,
            message: "OTP sent successfully",
            session_id: data.session_id
        });


    } catch (error) {

        console.error(error);

        res.status(500).json({
            success: false,
            message: "Server error"
        });

    }

});


app.post("/api/verify-otp", async (req, res) => {

    try {

        const {
            mobile,
            otp,
            session_id
        } = req.body;


        if (!mobile || !otp || !session_id) {

            return res.status(400).json({
                success: false,
                message:
                    "Mobile, OTP and session ID are required"
            });

        }


        const response = await fetch(
            "https://2factor.in/API/V1/OTP/VERIFY",
            {
                method: "POST",

                headers: {
                    "X-API-Key": API_KEY,
                    "Content-Type": "application/json"
                },

                body: JSON.stringify({
                    session_id: session_id,
                    otp: otp
                })
            }
        );


        const data = await response.json();


        if (!response.ok) {

            return res.status(response.status).json({
                success: false,
                message: data.message || "Invalid OTP",
                data: data
            });

        }


        res.json({
            success: true,
            message: "OTP verified successfully"
        });


    } catch (error) {

        console.error(error);

        res.status(500).json({
            success: false,
            message: "Server error"
        });

    }

});


app.listen(PORT, () => {

    console.log(
        `Server running at http://localhost:${PORT}`
    );

});



const mobileForm =
    document.getElementById("mobileForm");

const mobileNumber =
    document.getElementById("mobileNumber");

const mobileError =
    document.getElementById("mobileError");

const mobileSection =
    document.getElementById("mobileSection");

const otpSection =
    document.getElementById("otpSection");

const successSection =
    document.getElementById("successSection");

const displayNumber =
    document.getElementById("displayNumber");

const otpInputs =
    document.querySelectorAll(".otp-input");

const otpForm =
    document.getElementById("otpForm");

const verifyBtn =
    document.getElementById("verifyBtn");

const resendBtn =
    document.getElementById("resendBtn");

const timerText =
    document.getElementById("timerText");

const otpMessage =
    document.getElementById("otpMessage");

let sessionId = "";

let mobile = "";

let countdown = 45;

let timer;


async function sendOTP() {

    const number =
        mobileNumber.value.trim();


    if (!/^[6-9]\d{9}$/.test(number)) {

        mobileError.textContent =
            "Enter a valid 10-digit mobile number.";

        return;

    }


    mobileError.textContent = "";

    mobile =
        "+91" + number;


    try {

        const response =
            await fetch(
                "http://localhost:5000/api/send-otp",
                {
                    method: "POST",

                    headers: {
                        "Content-Type":
                            "application/json"
                    },

                    body: JSON.stringify({
                        mobile: mobile
                    })
                }
            );


        const data =
            await response.json();


        if (!response.ok) {

            mobileError.textContent =
                data.message ||
                "Unable to send OTP.";

            return;

        }


        sessionId =
            data.session_id;


        displayNumber.textContent =
            `+91 ${number}`;


        mobileSection.classList.add(
            "hidden"
        );


        otpSection.classList.remove(
            "hidden"
        );


        startTimer();


        otpInputs[0].focus();


    } catch (error) {

        mobileError.textContent =
            "Unable to connect to server.";

        console.error(error);

    }

}


function startTimer() {

    clearInterval(timer);

    countdown = 45;

    resendBtn.disabled = true;

    updateTimer();


    timer = setInterval(() => {

        countdown--;

        updateTimer();


        if (countdown <= 0) {

            clearInterval(timer);

            timerText.textContent =
                "You can resend the OTP";

            resendBtn.disabled = false;

        }

    }, 1000);

}


function updateTimer() {

    timerText.innerHTML =
        `Resend OTP in <strong>${countdown}s</strong>`;

}


function getEnteredOTP() {

    return Array.from(otpInputs)
        .map(input => input.value)
        .join("");

}


function clearOTP() {

    otpInputs.forEach(input => {

        input.value = "";

        input.classList.remove(
            "error-input",
            "success"
        );

    });

    otpInputs[0].focus();

}


function showError(message) {

    otpMessage.textContent =
        message;

    otpMessage.className =
        "message error";


    otpInputs.forEach(input => {

        input.classList.add(
            "error-input"
        );

    });

}


mobileForm.addEventListener(
    "submit",
    event => {

        event.preventDefault();

        sendOTP();

    }
);


otpInputs.forEach(
    (input, index) => {


        input.addEventListener(
            "input",
            event => {

                const value =
                    event.target.value;


                if (!/^\d$/.test(value)) {

                    event.target.value = "";

                    return;

                }


                input.classList.remove(
                    "error-input"
                );


                if (
                    index <
                    otpInputs.length - 1
                ) {

                    otpInputs[
                        index + 1
                    ].focus();

                }

            }
        );


        input.addEventListener(
            "keydown",
            event => {

                if (
                    event.key === "Backspace" &&
                    input.value === "" &&
                    index > 0
                ) {

                    otpInputs[
                        index - 1
                    ].focus();

                }


                if (
                    event.key === "ArrowLeft" &&
                    index > 0
                ) {

                    otpInputs[
                        index - 1
                    ].focus();

                }


                if (
                    event.key === "ArrowRight" &&
                    index <
                    otpInputs.length - 1
                ) {

                    otpInputs[
                        index + 1
                    ].focus();

                }

            }
        );


        input.addEventListener(
            "paste",
            event => {

                event.preventDefault();


                const pastedOTP =
                    event.clipboardData
                        .getData("text")
                        .replace(/\D/g, "")
                        .slice(0, 6);


                if (
                    pastedOTP.length !== 6
                ) {

                    return;

                }


                pastedOTP
                    .split("")
                    .forEach(
                        (digit, i) => {

                            otpInputs[i]
                                .value = digit;

                        }
                    );


                otpInputs[5].focus();

            }
        );

    }
);


async function verifyOTP() {

    const otp =
        getEnteredOTP();


    if (otp.length !== 6) {

        showError(
            "Please enter the complete 6-digit OTP."
        );

        return;

    }


    try {

        const response =
            await fetch(
                "http://localhost:5000/api/verify-otp",
                {
                    method: "POST",

                    headers: {
                        "Content-Type":
                            "application/json"
                    },

                    body: JSON.stringify({
                        mobile: mobile,
                        otp: otp,
                        session_id: sessionId
                    })
                }
            );


        const data =
            await response.json();


        if (!response.ok) {

            showError(
                data.message ||
                "Invalid OTP."
            );

            return;

        }


        otpInputs.forEach(input => {

            input.classList.remove(
                "error-input"
            );

            input.classList.add(
                "success"
            );

        });


        otpMessage.textContent =
            "✓ OTP verified successfully!";

        otpMessage.className =
            "message success";


        verifyBtn.disabled = true;

        verifyBtn.textContent =
            "Verified ✓";


        resendBtn.disabled = true;

        clearInterval(timer);


        timerText.textContent =
            "Verification completed";


        setTimeout(() => {

            otpSection.classList.add(
                "hidden"
            );

            successSection.classList.remove(
                "hidden"
            );

        }, 800);


    } catch (error) {

        showError(
            "Unable to connect to server."
        );

        console.error(error);

    }

}


otpForm.addEventListener(
    "submit",
    event => {

        event.preventDefault();

        verifyOTP();

    }
);


resendBtn.addEventListener(
    "click",
    () => {

        clearOTP();

        otpMessage.textContent = "";

        otpMessage.className =
            "message";

        verifyBtn.disabled = false;

        verifyBtn.textContent =
            "Verify OTP";

        sendOTP();

    }
);

