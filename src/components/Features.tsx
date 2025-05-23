
import { Brain, Database, BarChart3, Shield, Zap, Users } from 'lucide-react';

const Features = () => {
  const features = [
    {
      icon: Brain,
      title: 'Advanced Machine Learning',
      description: 'State-of-the-art ML algorithms that adapt and learn from your data patterns.',
      color: 'text-blue-600'
    },
    {
      icon: Database,
      title: 'Big Data Processing',
      description: 'Handle massive datasets with lightning-fast processing and real-time analytics.',
      color: 'text-purple-600'
    },
    {
      icon: BarChart3,
      title: 'Predictive Analytics',
      description: 'Forecast trends and make data-driven decisions with confidence.',
      color: 'text-green-600'
    },
    {
      icon: Shield,
      title: 'Enterprise Security',
      description: 'Bank-level security protocols to protect your sensitive data and insights.',
      color: 'text-red-600'
    },
    {
      icon: Zap,
      title: 'Real-time Processing',
      description: 'Get instant results with our optimized processing pipelines.',
      color: 'text-yellow-600'
    },
    {
      icon: Users,
      title: 'Collaborative Platform',
      description: 'Built for teams with seamless collaboration and sharing capabilities.',
      color: 'text-indigo-600'
    }
  ];

  return (
    <section id="features" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Powerful Features for
            <span className="block text-blue-600">Modern Businesses</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Our comprehensive suite of AI and data tools empowers organizations to unlock the full potential of their data.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={feature.title}
              className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover-scale group"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className={`${feature.color} mb-4 group-hover:scale-110 transition-transform duration-300`}>
                <feature.icon size={48} />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                {feature.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
