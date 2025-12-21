import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/hooks/use-toast';

interface QuoteRequestModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const QuoteRequestModal = ({ isOpen, onClose }: QuoteRequestModalProps) => {
  const { t } = useTranslation();
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    mobile: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validate required fields
    if (!formData.name.trim() || !formData.mobile.trim() || !formData.email.trim()) {
      toast({
        title: t('quoteForm.validationError'),
        description: t('quoteForm.fillRequired'),
        variant: 'destructive'
      });
      return;
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      toast({
        title: t('quoteForm.validationError'),
        description: t('quoteForm.invalidEmail'),
        variant: 'destructive'
      });
      return;
    }

    setIsSubmitting(true);
    
    // Simulate submission
    setTimeout(() => {
      setIsSubmitting(false);
      toast({
        title: t('quoteForm.successTitle'),
        description: t('quoteForm.successMessage'),
      });
      setFormData({ name: '', mobile: '', email: '', message: '' });
      onClose();
    }, 1000);
  };

  const handleBackdropClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  if (!isOpen) return null;

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm"
      onClick={handleBackdropClick}
    >
      <div className="bg-card border border-border rounded-2xl w-full max-w-md p-6 relative shadow-2xl animate-in fade-in zoom-in-95 duration-200">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-muted-foreground hover:text-foreground transition-colors"
          aria-label="Close"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Header */}
        <div className="text-center mb-6">
          <h3 className="font-display text-2xl font-bold text-foreground">
            {t('quoteForm.title')}
          </h3>
          <p className="text-muted-foreground text-sm mt-1">
            {t('quoteForm.subtitle')}
          </p>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <Input
              type="text"
              name="name"
              placeholder={t('quoteForm.namePlaceholder')}
              value={formData.name}
              onChange={handleChange}
              className="rounded-xl bg-background border-border/50 focus:border-primary"
            />
          </div>
          
          <div>
            <Input
              type="tel"
              name="mobile"
              placeholder={t('quoteForm.mobilePlaceholder')}
              value={formData.mobile}
              onChange={handleChange}
              className="rounded-xl bg-background border-border/50 focus:border-primary"
            />
          </div>
          
          <div>
            <Input
              type="email"
              name="email"
              placeholder={t('quoteForm.emailPlaceholder')}
              value={formData.email}
              onChange={handleChange}
              className="rounded-xl bg-background border-border/50 focus:border-primary"
            />
          </div>
          
          <div>
            <Textarea
              name="message"
              placeholder={t('quoteForm.messagePlaceholder')}
              value={formData.message}
              onChange={handleChange}
              rows={4}
              className="rounded-xl bg-background border-border/50 focus:border-primary resize-none"
            />
          </div>

          <Button 
            type="submit" 
            variant="hero" 
            size="lg" 
            className="w-full"
            disabled={isSubmitting}
          >
            {isSubmitting ? t('quoteForm.submitting') : t('quoteForm.submit')}
          </Button>
        </form>
      </div>
    </div>
  );
};

export default QuoteRequestModal;
