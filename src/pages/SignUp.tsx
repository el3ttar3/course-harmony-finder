import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";
import { FcGoogle } from "react-icons/fc";

const SignUp = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success("Account created successfully!");
    navigate("/signin");
  };

  return (
    <div className="min-h-screen flex items-center justify-center p-4"
      style={{
        backgroundImage: "url('/background.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundBlendMode: "overlay",
        backgroundColor: "rgba(0, 0, 0, 0.7)"
      }}>
      <div className="w-full max-w-md space-y-8 bg-white/90 backdrop-blur-sm p-8 rounded-xl shadow-xl">
        <div className="text-center">
          <h2 className="text-3xl font-bold">Create Account</h2>
          <p className="mt-2 text-gray-600">Join our community today!</p>
        </div>
        <form onSubmit={handleSubmit} className="mt-8 space-y-6">
          <div className="space-y-4">
            <Input
              type="text"
              placeholder="Username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
            />
            <Input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <Input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <Button type="submit" className="w-full">
            Sign Up
          </Button>
          <Button
            type="button"
            variant="outline"
            className="w-full flex items-center justify-center gap-2"
            onClick={() => toast.info("Google Sign Up coming soon!")}
          >
            <FcGoogle className="w-5 h-5" />
            Sign up with Google
          </Button>
        </form>
      </div>
    </div>
  );
};

export default SignUp;