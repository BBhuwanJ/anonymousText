import {
    Html,
    Head,
    Preview,
    Body,
    Container,
    Text,
    Section,
} from "@react-email/components";

interface VerificationEmailProps {
    username: string;
    otp: string;
}

export const VerificationEmail = ({ username = "there", otp }: VerificationEmailProps) => {
    return (
        <Html>
            <Head />
            <Preview>Your verification code is {otp}</Preview>
            <Body style={main}>
                <Container style={container}>
                    <Text style={greeting}>Hi {username},</Text>
                    <Text style={text}>
                        Use the verification code below to verify your email address:
                    </Text>
                    <Section style={codeContainer}>
                        <Text style={code}>{otp}</Text>
                    </Section>
                    <Text style={text}>
                        If you did not request this, please ignore this email.
                    </Text>
                    <Text style={footer}>Thanks, <br /> The Team</Text>
                </Container>
            </Body>
        </Html>
    );
};

// Styles
const main = {
    backgroundColor: "#f6f9fc",
    fontFamily: "'Helvetica Neue', Helvetica, Arial, sans-serif",
};

const container = {
    maxWidth: "600px",
    margin: "0 auto",
    padding: "20px",
    backgroundColor: "#ffffff",
    borderRadius: "8px",
    boxShadow: "0 4px 8px rgba(0,0,0,0.05)",
};

const greeting = {
    fontSize: "18px",
    fontWeight: "bold",
};

const text = {
    fontSize: "16px",
    color: "#333333",
    lineHeight: "1.5",
};

const codeContainer = {
    margin: "20px 0",
    textAlign: "center" as const,
};

const code = {
    display: "inline-block",
    fontSize: "32px",
    fontWeight: "bold",
    letterSpacing: "6px",
    padding: "12px 24px",
    backgroundColor: "#f2f4f6",
    borderRadius: "8px",
    color: "#000",
};

const footer = {
    fontSize: "14px",
    color: "#888888",
    marginTop: "30px",
};

export default VerificationEmail;
