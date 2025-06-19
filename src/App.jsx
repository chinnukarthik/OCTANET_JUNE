//Inital Imports
import { useEffect } from "react";
import { motion } from "framer-motion";
import { Button } from "./components/ui/button";
import { Toaster, toast } from "sonner";
import {
  ArrowRight,
  Check,
  Star,
  Zap,
  Shield,
  Rocket,
  Users,
  Trophy,
  Play,
  ChevronDown,
  Github,
  Twitter,
  Linkedin,
} from "lucide-react";
//Pricing Data
const pricingPlans = [
  {
    name: "Starter",
    price: "900",
    period: "/month",
    description: "Perfect for individuals getting started",
    features: [
      "Up to 5 projects",
      "Basic analytics",
      "Email support",
      "1GB storage",
      "Standard templates",
    ],
    popular: false,
  },
  {
    name: "Pro",
    price: "2900",
    period: "/month",
    description: "Ideal for growing teams and businesses",
    features: [
      "Unlimited projects",
      "Advanced analytics",
      "Priority support",
      "50GB storage",
      "Premium templates",
      "Team collaboration",
      "API access",
    ],
    popular: true,
  },
  {
    name: "Enterprise",
    price: "3999",
    period: "/month",
    description: "For large organizations with custom needs",
    features: [
      "Everything in Pro",
      "Custom integrations",
      "Dedicated support",
      "Unlimited storage",
      "White-label solution",
      "Advanced security",
      "SLA guarantee",
    ],
    popular: false,
  },
];
//Testimonials Data
const testimonials = [
  {
    name: "Aarav Sharma",
    role: "Software Engineer",
    content: "This website is very user-friendly and easy to navigate.",
    rating: 5,
    avatar:
      "https://images.unsplash.com/photo-1665779912168-c6d48ec98dcb?w=64&h=64&fit=crop&crop=face",
  },
  {
    name: "Priya Singh",
    role: "Freelance Designer",
    content: "I love the clean design and fast loading speed of this site.",
    rating: 5,
    avatar:
      "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=64&h=64&fit=crop&crop=face",
  },
  {
    name: "Rohan Patel",
    role: "Digital Marketer",
    content: "Great website, helped me find exactly what I needed quickly.",
    rating: 5,
    avatar:
      "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=64&h=64&fit=crop&crop=face",
  },
];

//Feature Data
const featuresList = [
  {
    icon: <Zap className="h-8 w-8" />,
    title: "Lightning Fast",
    description:
      "Optimized for speed with instant loading and real-time updates",
  },
  {
    icon: <Shield className="h-8 w-8" />,
    title: "Enterprise Security",
    description:
      "Bank-level security with end-to-end encryption and compliance",
  },
  {
    icon: <Users className="h-8 w-8" />,
    title: "Team Collaboration",
    description: "Seamless collaboration tools that keep everyone in sync",
  },
  {
    icon: <Rocket className="h-8 w-8" />,
    title: "Rapid Deployment",
    description: "Get up and running in minutes with our streamlined setup",
  },
  {
    icon: <Trophy className="h-8 w-8" />,
    title: "Achievements & Rewards",
    description: "Gamify productivity with badges and leaderboards",
  },
  {
    icon: <Star className="h-8 w-8" />,
    title: "Premium Support",
    description: "24/7 expert support ready to help whenever you need it",
  },
];
//Js Functionality
const handleFeatureNotImplemented = () => {
  toast("Trial started! Check your email for details.");
};

const App = () => {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) entry.target.classList.add("revealed");
        });
      },
      { threshold: 0.1, rootMargin: "0px 0px -50px 0px" }
    );

    document
      .querySelectorAll(".scroll-reveal")
      .forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <div className="min-h-screen gradient-bg text-white overflow-x-hidden bg-gradient-to-r from-purple-900 to-blue-900">
      <Toaster />

      {/* Navigation */}
      <motion.nav
        className="fixed top-0 w-full z-50 bg-white/15 backdrop-blur-md "
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <div className="container mx-auto px-6 py-4 flex items-center justify-between">
          <motion.div
            className="text-2xl font-bold bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 bg-clip-text text-transparent "
            whileHover={{ scale: 1.05 }}
          >
            GameFlow
          </motion.div>

          <div className="hidden md:flex items-center space-x-8">
            {["features", "pricing", "testimonials"].map((id) => (
              <a
                key={id}
                href={`#${id}`}
                className="hover:text-purple-400 transition-colors capitalize"
              >
                {id === "testimonials"
                  ? "Reviews"
                  : id.charAt(0).toUpperCase() + id.slice(1)}
              </a>
            ))}
            <Button
              variant="outline"
              className="border-purple-500 text-purple-400 hover:bg-purple-500 hover:text-white"
              onClick={handleFeatureNotImplemented}
            >
              Sign In
            </Button>
          </div>
        </div>
      </motion.nav>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center pt-20">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl floating-animation"></div>
          <div
            className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-blue-500/20 rounded-full blur-3xl floating-animation"
            style={{ animationDelay: "2s" }}
          ></div>
        </div>

        <div className="container mx-auto px-6 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-6xl md:text-8xl font-black mb-6 leading-tight">
              Level Up Your
              <span className="gradient-text block bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500  bg-clip-text text-transparent">
                Workflow
              </span>
            </h1>

            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Experience the future of productivity with our gaming-inspired
              platform. Built for teams that demand excellence and love
              beautiful interfaces.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button
                size="lg"
                className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white px-8 py-4 text-lg pulse-glow"
                onClick={handleFeatureNotImplemented}
              >
                Start Free Trial
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>

              <Button
                variant="outline"
                size="lg"
                className="border-white/30 text-white hover:bg-white/10 px-8 py-4 text-lg"
                onClick={handleFeatureNotImplemented}
              >
                <Play className="mr-2 h-5 w-5" />
                Watch Demo
              </Button>
            </div>
          </motion.div>

          <motion.div
            className="mt-16"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <ChevronDown className="h-8 w-8 mx-auto animate-bounce text-purple-400" />
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-24 relative">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16 scroll-reveal">
            <h2 className="text-5xl font-bold mb-6 gradient-text">
              Powerful Features
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Everything you need to supercharge your team's productivity
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuresList.map(({ icon, title, description }, i) => (
              <motion.div
                key={title}
                className="p-8 rounded-xl bg-gradient-to-r from-purple-700/60 to-blue-700/60 shadow-lg scroll-reveal"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15 }}
              >
                <div className="flex items-center mb-4 text-purple-300">
                  {icon}
                </div>
                <h3 className="text-2xl font-semibold mb-2">{title}</h3>
                <p className="text-gray-300">{description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section
        id="pricing"
        className="py-24 bg-gradient-to-r from-purple-900 to-blue-900 relative overflow-hidden"
      >
        <div className="container mx-auto px-6">
          <div className="text-center mb-16 scroll-reveal">
            <h2 className="text-5xl font-bold mb-6 gradient-text">
              Choose Your Plan
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Flexible pricing to suit every team and project size
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-10">
            {pricingPlans.map(
              ({ name, price, period, description, features, popular }) => (
                <motion.div
                  key={name}
                  className={`p-8 rounded-2xl shadow-xl bg-gradient-to-br from-purple-800 to-blue-800 relative ${
                    popular
                      ? "border-4 border-purple-500"
                      : "border border-transparent"
                  } scroll-reveal`}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5 }}
                >
                  {popular && (
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-purple-600 px-4 py-1 rounded-full text-white text-sm font-semibold">
                      Most Popular
                    </div>
                  )}

                  <h3 className="text-3xl font-bold mb-2">{name}</h3>
                  <p className="text-gray-300 mb-6">{description}</p>
                  <div className="mb-8">
                    <span className="text-5xl font-extrabold">{price}</span>
                    <span className="text-xl text-gray-400">{period}</span>
                  </div>

                  <ul className="mb-8 space-y-3">
                    {features.map((feature) => (
                      <li
                        key={feature}
                        className="flex items-center text-gray-300"
                      >
                        <Check className="mr-2 h-5 w-5 text-green-400" />
                        {feature}
                      </li>
                    ))}
                  </ul>

                  <Button
                    className="w-full bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white px-6 py-3 flex items-center justify-center  "
                    onClick={handleFeatureNotImplemented}
                  >
                    Get Started
                  </Button>
                </motion.div>
              )
            )}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="py-24">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16 scroll-reveal">
            <h2 className="text-5xl font-bold mb-6 gradient-text">
              What Our Users Say
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Real feedback from teams who leveled up with GameFlow
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-10">
            {testimonials.map(({ name, role, content, rating, avatar }) => (
              <motion.div
                key={name}
                className="p-8 rounded-xl bg-gradient-to-r from-purple-700/40 to-blue-700/40 shadow-lg scroll-reveal"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
              >
                <div className="flex items-center mb-6">
                  <img
                    src={avatar}
                    alt={name}
                    className="w-14 h-14 rounded-full mr-4"
                  />
                  <div>
                    <p className="font-bold text-lg">{name}</p>
                    <p className="text-sm text-purple-300">{role}</p>
                  </div>
                </div>
                <p className="mb-6 text-gray-300 italic">"{content}"</p>
                <div className="flex">
                  {[...Array(rating)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 text-yellow-400" />
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-purple-900 py-12 mt-24 text-center text-gray-400">
        <p>© 2025 GameFlow. All rights reserved.</p>
        <div className="flex justify-center mt-4 space-x-6">
          {[
            { Icon: Github, url: "https://github.com" },
            { Icon: Twitter, url: "https://twitter.com" },
            { Icon: Linkedin, url: "https://linkedin.com" },
          ].map(({ Icon, url }) => (
            <a
              key={url}
              href={url}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={Icon.name}
              className="hover:text-white"
            >
              <Icon className="h-6 w-6" />
            </a>
          ))}
        </div>
      </footer>
    </div>
  );
};

export default App;
