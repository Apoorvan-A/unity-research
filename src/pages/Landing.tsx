import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Navigation } from "@/components/ui/navigation";
import { 
  ArrowRight, 
  BookOpen, 
  Users, 
  Search,
  BarChart3,
  FileText,
  Database,
  FolderOpen,
  MessageSquare,
  Shield,
  Zap,
  Globe,
  Target
} from "lucide-react";
import heroImage from "@/assets/hero-collaboration.jpg";
import networkImage from "@/assets/research-network.jpg";

export default function Landing() {
  const features = [
    {
      icon: Search,
      title: "Advanced Discovery",
      description: "Find relevant papers, datasets, and collaborators with intelligent search and recommendations."
    },
    {
      icon: Users,
      title: "Seamless Collaboration", 
      description: "Connect with researchers worldwide, form teams, and manage projects with built-in tools."
    },
    {
      icon: FileText,
      title: "Research Repository",
      description: "Upload, version, and share your papers and datasets with proper attribution and licensing."
    },
    {
      icon: BarChart3,
      title: "Impact Analytics",
      description: "Track citations, downloads, and collaboration metrics to measure your research impact."
    },
    {
      icon: MessageSquare,
      title: "Real-time Discussions",
      description: "Engage in threaded discussions with @mentions and file attachments for each project."
    },
    {
      icon: Shield,
      title: "Secure & Private",
      description: "Enterprise-grade security with granular access controls and institutional compliance."
    }
  ];

  const stats = [
    { value: "50K+", label: "Active Researchers" },
    { value: "120K+", label: "Research Papers" },
    { value: "25K+", label: "Active Projects" },
    { value: "180+", label: "Universities" }
  ];

  const researchTypes = [
    { icon: FileText, label: "Papers", count: "120K+" },
    { icon: Database, label: "Datasets", count: "45K+" },
    { icon: FolderOpen, label: "Projects", count: "25K+" }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      {/* Hero Section */}
      <section className="relative py-20 px-4 bg-gradient-hero">
        <div className="absolute inset-0 bg-black/20" />
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-10"
          style={{ backgroundImage: `url(${heroImage})` }}
        />
        
        <div className="relative container mx-auto text-center">
          <Badge className="mb-6 bg-white/20 text-white border-white/30 backdrop-blur-sm">
            <Zap className="h-3 w-3 mr-1" />
            Trusted by 180+ Universities Worldwide
          </Badge>
          
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
            Research Without
            <span className="block bg-gradient-to-r from-yellow-300 to-orange-300 bg-clip-text text-transparent">
              Boundaries
            </span>
          </h1>
          
          <p className="text-xl text-white/90 mb-10 max-w-3xl mx-auto leading-relaxed">
            Connect with researchers globally, discover breakthrough papers, and collaborate 
            on projects that matter. The future of academic collaboration starts here.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button size="lg" className="bg-white text-primary hover:bg-white/90 shadow-elegant" asChild>
              <Link to="/signup">
                Start Collaborating
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button variant="outline" size="lg" className="border-white text-white hover:bg-white/10 backdrop-blur-sm" asChild>
              <Link to="/demo">
                <Globe className="mr-2 h-5 w-5" />
                Explore Public Research
              </Link>
            </Button>
          </div>

          {/* Stats */}
          <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-white mb-2">
                  {stat.value}
                </div>
                <div className="text-white/80 text-sm">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Research Types */}
      <section className="py-16 px-4 bg-muted/30">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Everything Research, One Platform</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              From groundbreaking papers to collaborative datasets and ongoing projects
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {researchTypes.map((type, index) => {
              const IconComponent = type.icon;
              return (
                <Card key={index} className="text-center bg-gradient-card hover:shadow-card transition-all duration-300 hover:scale-[1.02]">
                  <CardHeader>
                    <div className="mx-auto w-16 h-16 bg-gradient-primary rounded-2xl flex items-center justify-center mb-4">
                      <IconComponent className="h-8 w-8 text-white" />
                    </div>
                    <CardTitle className="text-2xl">{type.label}</CardTitle>
                    <CardDescription className="text-lg font-semibold text-primary">
                      {type.count}
                    </CardDescription>
                  </CardHeader>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-accent/10 text-accent border-accent/20">
              <Target className="h-3 w-3 mr-1" />
              Powerful Features
            </Badge>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Built for Modern Research
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Every tool you need to accelerate discovery, foster collaboration, 
              and maximize your research impact.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => {
              const IconComponent = feature.icon;
              return (
                <Card key={index} className="bg-gradient-card hover:shadow-card transition-all duration-300 hover:scale-[1.02] group">
                  <CardHeader>
                    <div className="w-12 h-12 bg-gradient-primary rounded-xl flex items-center justify-center mb-3 group-hover:scale-110 transition-transform">
                      <IconComponent className="h-6 w-6 text-white" />
                    </div>
                    <CardTitle className="text-xl">{feature.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-base leading-relaxed">
                      {feature.description}
                    </CardDescription>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Research Network Visualization */}
      <section className="py-20 px-4 bg-gradient-secondary relative overflow-hidden">
        <div 
          className="absolute inset-0 opacity-20"
          style={{ backgroundImage: `url(${networkImage})` }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-secondary via-secondary-light to-secondary" />
        
        <div className="relative container mx-auto text-center text-white">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Join the Global Research Network
          </h2>
          <p className="text-xl mb-10 max-w-3xl mx-auto opacity-90">
            Connect with researchers across disciplines and institutions. 
            Your next breakthrough collaboration is just a search away.
          </p>
          <Button size="lg" className="bg-white text-secondary hover:bg-white/90 shadow-elegant">
            <Link to="/signup" className="flex items-center">
              Get Started Today
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-primary text-primary-foreground py-12 px-4">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <BookOpen className="h-6 w-6" />
                <span className="text-lg font-bold">ResearchHub</span>
              </div>
              <p className="text-primary-foreground/80">
                Connecting researchers worldwide through intelligent collaboration tools.
              </p>
            </div>
            
            <div>
              <h4 className="font-semibold mb-3">Platform</h4>
              <ul className="space-y-2 text-primary-foreground/80">
                <li><Link to="/features" className="hover:text-white transition-colors">Features</Link></li>
                <li><Link to="/pricing" className="hover:text-white transition-colors">Pricing</Link></li>
                <li><Link to="/api" className="hover:text-white transition-colors">API</Link></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold mb-3">Resources</h4>
              <ul className="space-y-2 text-primary-foreground/80">
                <li><Link to="/docs" className="hover:text-white transition-colors">Documentation</Link></li>
                <li><Link to="/help" className="hover:text-white transition-colors">Help Center</Link></li>
                <li><Link to="/blog" className="hover:text-white transition-colors">Blog</Link></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold mb-3">Company</h4>
              <ul className="space-y-2 text-primary-foreground/80">
                <li><Link to="/about" className="hover:text-white transition-colors">About</Link></li>
                <li><Link to="/contact" className="hover:text-white transition-colors">Contact</Link></li>
                <li><Link to="/privacy" className="hover:text-white transition-colors">Privacy</Link></li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-primary-foreground/20 mt-8 pt-8 text-center text-primary-foreground/80">
            <p>&copy; 2024 ResearchHub. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}