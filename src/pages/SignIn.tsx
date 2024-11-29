import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";
import { FcGoogle } from "react-icons/fc";

const SignIn = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (username === "admin" && password === "admin") {
      toast.success("Welcome back, Admin!");
      navigate("/admin");
    } else {
      toast.error("Invalid credentials");
    }
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
          <h2 className="text-3xl font-bold">Sign In</h2>
          <p className="mt-2 text-gray-600">Welcome back!</p>
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
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <Button type="submit" className="w-full">
            Sign In
          </Button>
          <Button
            type="button"
            variant="outline"
            className="w-full flex items-center justify-center gap-2"
            onClick={() => toast.info("Google Sign In coming soon!")}
          >
            <FcGoogle className="w-5 h-5" />
            Sign in with Google
          </Button>
        </form>
      </div>
    </div>
  );
};

export default SignIn;