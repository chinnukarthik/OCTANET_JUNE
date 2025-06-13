import { useEffect } from 'react';
import { motion } from 'framer-motion';
import { Button } from './components/ui/button';
import { Toaster, toast } from 'sonner';
import { 
  ArrowRight, Check, Star, Zap, Shield, Rocket, Users, Trophy, Play, ChevronDown, Github, Twitter, Linkedin
} from 'lucide-react';

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
      "Standard templates"
    ],
    popular: false
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
      "API access"
    ],
    popular: true
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
      "SLA guarantee"
    ],
    popular: false
  }
];

const testimonials = [
  {
    name: "Sarah Chen",
    role: "Product Manager at TechCorp",
    content: "This platform revolutionized how our team collaborates. The interface is intuitive and the features are exactly what we needed.",
    rating: 5,
    avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=64&h=64&fit=crop&crop=face"
  },
  {
    name: "Marcus Rodriguez",
    role: "Startup Founder",
    content: "From prototype to production in record time. The gaming-inspired design keeps our team engaged and productive.",
    rating: 5,
    avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=64&h=64&fit=crop&crop=face"
  },
  {
    name: "Emily Watson",
    role: "Design Lead at InnovateLab",
    content: "The attention to detail and smooth animations make this a joy to use daily. Our productivity has increased by 40%.",
    rating: 5,
    avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=64&h=64&fit=crop&crop=face"
  }
];

const featuresList = [
  { icon: <Zap className="h-8 w-8" />, title: "Lightning Fast", description: "Optimized for speed with instant loading and real-time updates" },
  { icon: <Shield className="h-8 w-8" />, title: "Enterprise Security", description: "Bank-level security with end-to-end encryption and compliance" },
  { icon: <Users className="h-8 w-8" />, title: "Team Collaboration", description: "Seamless collaboration tools that keep everyone in sync" },
  { icon: <Rocket className="h-8 w-8" />, title: "Rapid Deployment", description: "Get up and running in minutes with our streamlined setup" },
  { icon: <Trophy className="h-8 w-8" />, title: "Achievements & Rewards", description: "Gamify productivity with badges and leaderboards" },
  { icon: <Star className="h-8 w-8" />, title: "Premium Support", description: "24/7 expert support ready to help whenever you need it" }
];

const handleFeatureNotImplemented = () => {
  toast("Feature Coming Soon! This feature isn't implemented yet—but don't worry! You can request it in your next prompt! 🚀");
};

const App = () => {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) entry.target.classList.add('revealed');
        });
      },
      { threshold: 0.1, rootMargin: '0px 0px -50px 0px' }
    );

    document.querySelectorAll('.scroll-reveal').forEach(el => observer.observe(el));

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
            {['features', 'pricing', 'testimonials'].map(id => (
              <a key={id} href={`#${id}`} className="hover:text-purple-400 transition-colors capitalize">
                {id === 'testimonials' ? 'Reviews' : id.charAt(0).toUpperCase() + id.slice(1)}
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
          <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-blue-500/20 rounded-full blur-3xl floating-animation" style={{ animationDelay: '2s' }}></div>
        </div>
        
        <div className="container mx-auto px-6 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-6xl md:text-8xl font-black mb-6 leading-tight">
              Level Up Your
              <span className="gradient-text block bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500  bg-clip-text text-transparent">Workflow</span>
            </h1>
            
            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Experience the future of productivity with our gaming-inspired platform. 
              Built for teams that demand excellence and love beautiful interfaces.
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

    </div>
  );
};

export default App;
