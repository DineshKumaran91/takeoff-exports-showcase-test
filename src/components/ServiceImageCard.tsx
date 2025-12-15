import { LucideIcon } from 'lucide-react';

interface ServiceImageCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  imageUrl: string;
}

const ServiceImageCard = ({ icon: Icon, title, description, imageUrl }: ServiceImageCardProps) => (
  <div className="bg-card-gradient border border-border/50 rounded-2xl overflow-hidden hover:border-primary/50 transition-all duration-500 hover:shadow-lg hover:-translate-y-2 group">
    {/* Image Container */}
    <div className="relative h-48 overflow-hidden">
      <img 
        src={imageUrl} 
        alt={title}
        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-card/80 to-transparent" />
      <div className="absolute bottom-4 left-4">
        <div className="w-12 h-12 rounded-xl bg-primary/90 flex items-center justify-center shadow-lg">
          <Icon className="w-6 h-6 text-primary-foreground" strokeWidth={1.5} />
        </div>
      </div>
    </div>
    
    {/* Content */}
    <div className="p-6">
      <h3 className="font-display text-xl font-bold mb-3 text-foreground">{title}</h3>
      <p className="text-muted-foreground leading-relaxed text-sm">{description}</p>
    </div>
  </div>
);

export default ServiceImageCard;
