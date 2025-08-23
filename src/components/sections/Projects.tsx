import { motion } from 'framer-motion';

const Projects = () => {
  const projects = [
    {
      title: "QuantumFlow AI",
      description: "Revolutionary machine learning platform that processes complex data patterns 10x faster than traditional systems.",
      category: "Artificial Intelligence",
      status: "Live",
      tech: ["React", "Python", "TensorFlow", "AWS"]
    },
    {
      title: "EcoSync Network",
      description: "Blockchain-based sustainability tracking system helping corporations reduce carbon footprint by 40%.",
      category: "Blockchain",
      status: "In Development", 
      tech: ["Web3", "Solidity", "Next.js", "Node.js"]
    },
    {
      title: "NeuroLink Interface",
      description: "Brain-computer interface enabling direct neural control of digital devices with 99.7% accuracy.",
      category: "Biotech",
      status: "Research Phase",
      tech: ["C++", "CUDA", "PyTorch", "React Native"]
    },
    {
      title: "HyperScale Cloud",
      description: "Auto-scaling cloud infrastructure that adapts to traffic patterns in real-time, reducing costs by 60%.",
      category: "Cloud Computing",
      status: "Beta",
      tech: ["Kubernetes", "Go", "Docker", "Terraform"]
    },
    {
      title: "VirtueSpace VR",
      description: "Immersive virtual collaboration platform enabling seamless remote teamwork in 3D environments.",
      category: "Virtual Reality",
      status: "Live",
      tech: ["Unity", "WebXR", "TypeScript", "Firebase"]
    },
    {
      title: "CryptoGuard Security",
      description: "Advanced cybersecurity suite using quantum encryption to protect against next-generation threats.",
      category: "Cybersecurity", 
      status: "In Development",
      tech: ["Rust", "Quantum", "Linux", "GraphQL"]
    }
  ];

  const getStatusColor = (status) => {
    switch (status) {
      case 'Live': return 'text-green-400 bg-green-400/10';
      case 'Beta': return 'text-blue-400 bg-blue-400/10';
      case 'In Development': return 'text-yellow-400 bg-yellow-400/10';
      case 'Research Phase': return 'text-purple-400 bg-purple-400/10';
      default: return 'text-gray-400 bg-gray-400/10';
    }
  };

  return (
    <section id="projects" className="py-24 relative">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-gradient-violet via-gradient-teal to-gradient-blue bg-clip-text text-transparent">
            Projects
          </h2>
          <p className="text-xl text-foreground/80 max-w-3xl mx-auto leading-relaxed">
            Explore our portfolio of groundbreaking projects that are reshaping industries and defining the future of technology.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -10, scale: 1.02 }}
              className="glass-effect p-6 rounded-2xl group hover:bg-card/50 transition-all duration-300 cursor-pointer"
            >
              <div className="flex justify-between items-start mb-4">
                <span className="text-sm text-foreground/60 font-medium">{project.category}</span>
                <span className={`px-3 py-1 rounded-full text-xs font-medium ${getStatusColor(project.status)}`}>
                  {project.status}
                </span>
              </div>
              
              <h3 className="text-xl font-bold mb-3 text-primary group-hover:text-primary-glow transition-colors">
                {project.title}
              </h3>
              
              <p className="text-foreground/70 mb-6 leading-relaxed text-sm">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-2">
                {project.tech.map((tech) => (
                  <span 
                    key={tech}
                    className="px-2 py-1 text-xs bg-muted/50 text-foreground/60 rounded-lg"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <motion.div
                className="mt-4 pt-4 border-t border-border/20"
                initial={{ opacity: 0 }}
                whileHover={{ opacity: 1 }}
                transition={{ duration: 0.2 }}
              >
                <span className="text-sm text-primary font-medium">
                  Learn More →
                </span>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;