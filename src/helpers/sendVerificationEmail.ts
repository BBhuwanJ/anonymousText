import { resend } from "@/lib/resend";
import VerificationEmail from "../../emails/verificationEmail";
import { ApiResponse } from "@/types/ApiResponse";

export async function sendVerificationEmail(
    email: string,
    username: string,
    verifyCode: string,

): Promise<ApiResponse> {
    try {
        await resend.emails.send({
            from: 'onboarding@resend.dev',
            to: email,
            subject: 'anonyText | Verification Code',
            react: VerificationEmail({username, otp: verifyCode})
        });
        return { success: true, message: 'Verification email send successfully' }

    } catch (emailError) {
        console.error("Error sending Verificaton Email", emailError)
        return { success: false, message: 'failed to send Verification Email' }
    }
}
