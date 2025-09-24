import React, { useState, useEffect } from 'react';
import { Mail, Linkedin, MessageSquare, Phone, MapPin, Send, Github, CheckCircle, XCircle } from 'lucide-react';

const Contact = () => {
  const [hoveredCard, setHoveredCard] = useState(null);
  const [isMobile, setIsMobile] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState('');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  useEffect(() => {
    const checkDevice = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    checkDevice();
    window.addEventListener('resize', checkDevice);
    return () => window.removeEventListener('resize', checkDevice);
  }, []);

  // 🔧 REPLACE WITH YOUR ACTUAL CONTACT INFORMATION
  const contactMethods = [
    {
      id: 'email',
      icon: Mail,
      label: 'Email',
      value: 'umanaidu1109@gmail.com',
      href: 'https://mail.google.com/mail/?view=cm&fs=1&to=umanaidu1109@gmail.com',
      description: 'Send me a direct message'
    },
    {
      id: 'linkedin',
      icon: Linkedin,
      label: 'LinkedIn',
      value: 'linkedin.com/in/Umadevi', // ⚠️ Replace with your LinkedIn
      href: 'https://www.linkedin.com/in/uma-naidu09/', // ⚠️ Replace with your LinkedIn URL
      description: 'Let\'s connect professionally'
    },
    {
      id: 'github',
      icon: Github,
      label: 'GitHub',
      value: 'github.com/uma', // ⚠️ Replace with your GitHub
      href: 'https://github.com/umanaid', // ⚠️ Replace with your GitHub URL
      description: 'Check out my code'
    }
  ];

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const validateForm = () => {
    if (!formData.name.trim()) {
      setSubmitStatus('validation_error');
      return false;
    }
    if (!formData.email.trim() || !/\S+@\S+\.\S+/.test(formData.email)) {
      setSubmitStatus('email_error');
      return false;
    }
    if (!formData.message.trim()) {
      setSubmitStatus('message_error');
      return false;
    }
    return true;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!validateForm()) {
      return;
    }
    
    setIsSubmitting(true);
    setSubmitStatus('sending');

    // 🔧 REPLACE WITH YOUR GOOGLE APPS SCRIPT WEB APP URL
    const GOOGLE_SCRIPT_URL = 'https://script.google.com/macros/s/AKfycbzdvBMebwh6Tw8YmUuju-vx1JwB7q7d5_9fcAQXmbyTGcml-ppSmTv249jfokNpaySL/exec';

    const formDataToSend = {
      name: formData.name.trim(),
      email: formData.email.trim(),
      message: formData.message.trim(),
      timestamp: new Date().toISOString()
    };

    try {
      console.log('Sending form data:', formDataToSend);
      
      // Try with regular fetch first
      const response = await fetch(GOOGLE_SCRIPT_URL, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formDataToSend)
      });

      console.log('Response status:', response.status);
      console.log('Response ok:', response.ok);

      if (response.ok) {
        const result = await response.json();
        console.log('Response data:', result);
        
        if (result.success) {
          setSubmitStatus('success');
          setFormData({ name: '', email: '', message: '' });
        } else {
          console.error('Server returned error:', result.error);
          setSubmitStatus('server_error');
        }
      } else {
        console.error('HTTP Error:', response.status, response.statusText);
        setSubmitStatus('network_error');
      }
      
    } catch (error) {
      console.error('Fetch error:', error);
      
      // Fallback: Try with no-cors mode (won't get response but request will be sent)
      try {
        console.log('Trying fallback method with no-cors...');
        await fetch(GOOGLE_SCRIPT_URL, {
          method: 'POST',
          mode: 'no-cors',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(formDataToSend)
        });
        
        // If we get here without error, assume it worked
        console.log('Fallback request sent successfully');
        setSubmitStatus('success');
        setFormData({ name: '', email: '', message: '' });
        
      } catch (fallbackError) {
        console.error('Fallback also failed:', fallbackError);
        setSubmitStatus('network_error');
      }
    } finally {
      setIsSubmitting(false);
      
      // Clear status after 5 seconds
      setTimeout(() => {
        setSubmitStatus('');
      }, 5000);
    }
  };

  const getStatusMessage = () => {
    switch (submitStatus) {
      case 'sending':
        return {
          type: 'info',
          message: 'Sending your message...'
        };
      case 'success':
        return {
          type: 'success',
          message: '✅ Message sent successfully! I\'ll get back to you within 24 hours.'
        };
      case 'validation_error':
        return {
          type: 'error',
          message: '❌ Please enter your name.'
        };
      case 'email_error':
        return {
          type: 'error',
          message: '❌ Please enter a valid email address.'
        };
      case 'message_error':
        return {
          type: 'error',
          message: '❌ Please enter your message.'
        };
      case 'server_error':
        return {
          type: 'error',
          message: '❌ Server error. Please try again or contact me directly via email.'
        };
      case 'network_error':
        return {
          type: 'error',
          message: '❌ Network error. Please check your connection and try again.'
        };
      default:
        return null;
    }
  };

  const statusMessage = getStatusMessage();

  return (
    <div style={{ 
      width: '100%',
      minHeight: '100vh', 
      backgroundColor: 'black',
      padding: isMobile ? '1rem 0.75rem' : '2rem 1rem',
      fontFamily: 'system-ui, -apple-system, sans-serif'
    }}>
      <div style={{ 
        maxWidth: '1200px', 
        margin: '0 auto',
        color: 'white'
      }}>
        {/* Header */}
        <div style={{ textAlign: 'center', marginBottom: isMobile ? '2rem' : '3rem' }}>
          <div style={{
            display: 'inline-block',
            padding: isMobile ? '8px' : '12px',
            backgroundColor: 'rgba(255, 255, 255, 0.1)',
            borderRadius: '50%',
            marginBottom: isMobile ? '1rem' : '1.5rem'
          }}>
            <MessageSquare size={isMobile ? 24 : 32} color="white" />
          </div>
          <h1 style={{
            fontSize: isMobile ? '2rem' : 'clamp(2rem, 8vw, 4rem)',
            fontWeight: 'bold',
            margin: '0 0 1rem 0',
            lineHeight: '1.2',
            padding: '0 0.5rem'
          }}>
            Get in Touch
          </h1>
          <p style={{
            fontSize: isMobile ? '1rem' : 'clamp(1rem, 3vw, 1.25rem)',
            color: '#d1d5db',
            maxWidth: '600px',
            margin: '0 auto',
            lineHeight: '1.6',
            padding: '0 0.5rem'
          }}>
            I'm always open to new opportunities and exciting collaborations.
            <br />
            <span style={{ color: 'white' }}>Let's create something amazing together.</span>
          </p>
        </div>

        {/* Main Content */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: isMobile ? '1fr' : window.innerWidth > 1024 ? '1fr 1fr' : '1fr',
          gap: isMobile ? '1.5rem' : '2rem',
          alignItems: 'start'
        }}>
          {/* Contact Methods */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: isMobile ? '1rem' : '1.5rem' }}>
            <div style={{
              display: 'grid',
              gridTemplateColumns: isMobile ? '1fr' : 'repeat(auto-fit, minmax(250px, 1fr))',
              gap: isMobile ? '0.75rem' : '1rem'
            }}>
              {contactMethods.map((method) => {
                const IconComponent = method.icon;
                const isHovered = hoveredCard === method.id;
                
                return (
                  <a
                    key={method.id}
                    href={method.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                      display: 'block',
                      padding: isMobile ? '1rem' : '1.5rem',
                      backgroundColor: 'black',
                      border: '2px solid #374151',
                      borderRadius: isMobile ? '0.75rem' : '1rem',
                      textDecoration: 'none',
                      color: 'inherit',
                      transition: 'all 0.3s ease',
                      transform: isHovered && !isMobile ? 'scale(1.05)' : 'scale(1)',
                      borderColor: isHovered ? 'white' : '#374151',
                      boxShadow: isHovered && !isMobile ? '0 10px 25px rgba(255, 255, 255, 0.15)' : 'none',
                      position: 'relative',
                      overflow: 'hidden'
                    }}
                    onMouseEnter={() => !isMobile && setHoveredCard(method.id)}
                    onMouseLeave={() => !isMobile && setHoveredCard(null)}
                    onTouchStart={() => isMobile && setHoveredCard(method.id)}
                    onTouchEnd={() => isMobile && setHoveredCard(null)}
                  >
                    {isHovered && (
                      <div style={{
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        right: 0,
                        bottom: 0,
                        backgroundColor: 'rgba(255, 255, 255, 0.05)',
                        borderRadius: isMobile ? '0.75rem' : '1rem'
                      }} />
                    )}
                    
                    <div style={{ position: 'relative', zIndex: 1 }}>
                      <div style={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'space-between',
                        marginBottom: isMobile ? '0.75rem' : '1rem'
                      }}>
                        <IconComponent size={isMobile ? 24 : 28} color="white" />
                        <div style={{
                          width: isMobile ? '20px' : '24px',
                          height: isMobile ? '20px' : '24px',
                          backgroundColor: 'rgba(255, 255, 255, 0.1)',
                          borderRadius: '50%',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          transform: isHovered ? 'rotate(12deg)' : 'rotate(0deg)',
                          transition: 'transform 0.3s ease'
                        }}>
                          <div style={{
                            width: isMobile ? '4px' : '6px',
                            height: isMobile ? '4px' : '6px',
                            backgroundColor: 'white',
                            borderRadius: '50%'
                          }} />
                        </div>
                      </div>
                      
                      <h3 style={{
                        fontSize: isMobile ? '1rem' : '1.125rem',
                        fontWeight: '600',
                        margin: '0 0 0.5rem 0',
                        color: 'white'
                      }}>
                        {method.label}
                      </h3>
                      <p style={{
                        fontSize: isMobile ? '0.8rem' : '0.875rem',
                        color: '#d1d5db',
                        margin: '0 0 0.75rem 0'
                      }}>
                        {method.description}
                      </p>
                      <p style={{
                        fontSize: isMobile ? '0.7rem' : '0.75rem',
                        color: '#e5e7eb',
                        fontFamily: 'monospace',
                        wordBreak: 'break-all',
                        margin: '0'
                      }}>
                        {method.value}
                      </p>
                    </div>
                  </a>
                );
              })}
            </div>

            {/* Location Info */}
            <div style={{
              padding: isMobile ? '1rem' : '1.5rem',
              backgroundColor: 'black',
              border: '2px solid #374151',
              borderRadius: isMobile ? '0.75rem' : '1rem'
            }}>
              <div style={{
                display: 'flex',
                alignItems: 'center',
                marginBottom: isMobile ? '0.75rem' : '1rem'
              }}>
                <MapPin size={isMobile ? 20 : 24} color="white" style={{ marginRight: '0.75rem' }} />
                <h3 style={{
                  fontSize: isMobile ? '1rem' : '1.125rem',
                  fontWeight: '600',
                  margin: '0',
                  color: 'white'
                }}>
                  Location
                </h3>
              </div>
              <p style={{
                color: '#d1d5db',
                margin: '0 0 1rem 0',
                fontSize: isMobile ? '0.875rem' : '1rem'
              }}>
                Based in Airoli, Maharashtra, Available Worldwide
              </p>
              <div style={{ display: 'flex', alignItems: 'center' }}>
                <Phone size={isMobile ? 16 : 20} color="white" style={{ marginRight: '0.5rem' }} />
                <span style={{ 
                  color: '#d1d5db',
                  fontSize: isMobile ? '0.875rem' : '1rem'
                }}>
                  Available for calls & meetings
                </span>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div style={{
            padding: isMobile ? '1.25rem' : '2rem',
            backgroundColor: 'black',
            border: '2px solid #374151',
            borderRadius: isMobile ? '1rem' : '1.5rem'
          }}>
            <h2 style={{
              fontSize: isMobile ? '1.25rem' : '1.5rem',
              fontWeight: 'bold',
              color: 'white',
              margin: '0 0 1.5rem 0'
            }}>
              Send a Message
            </h2>
            
            {/* Status Messages */}
            {statusMessage && (
              <div style={{
                padding: '0.75rem 1rem',
                marginBottom: '1rem',
                borderRadius: '0.5rem',
                backgroundColor: statusMessage.type === 'success' ? '#065f46' : 
                                statusMessage.type === 'info' ? '#1e40af' : '#7f1d1d',
                border: `1px solid ${statusMessage.type === 'success' ? '#10b981' : 
                                    statusMessage.type === 'info' ? '#3b82f6' : '#ef4444'}`,
                color: statusMessage.type === 'success' ? '#d1fae5' : 
                       statusMessage.type === 'info' ? '#dbeafe' : '#fecaca',
                display: 'flex',
                alignItems: 'center',
                gap: '0.5rem'
              }}>
                {statusMessage.type === 'success' && <CheckCircle size={16} />}
                {statusMessage.type === 'error' && <XCircle size={16} />}
                <span>{statusMessage.message}</span>
              </div>
            )}
            
            {/* Contact Form */}
            <form onSubmit={handleSubmit} style={{ 
              display: 'flex', 
              flexDirection: 'column', 
              gap: isMobile ? '1rem' : '1.5rem' 
            }}>
              {/* Name Field */}
              <div>
                <label style={{
                  display: 'block',
                  color: 'white',
                  marginBottom: '0.5rem',
                  fontWeight: '500',
                  fontSize: isMobile ? '0.875rem' : '1rem'
                }}>
                  Your Name *
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  placeholder="Enter your name"
                  required
                  disabled={isSubmitting}
                  style={{
                    width: '100%',
                    padding: isMobile ? '0.625rem 0.875rem' : '0.75rem 1rem',
                    backgroundColor: isSubmitting ? '#0f172a' : '#111827',
                    border: '2px solid #374151',
                    borderRadius: '0.75rem',
                    color: 'white',
                    fontSize: isMobile ? '0.875rem' : '1rem',
                    outline: 'none',
                    transition: 'all 0.3s ease',
                    boxSizing: 'border-box',
                    cursor: isSubmitting ? 'not-allowed' : 'text'
                  }}
                  onFocus={(e) => {
                    if (!isSubmitting) {
                      e.target.style.borderColor = 'white';
                      e.target.style.boxShadow = '0 0 0 2px rgba(255, 255, 255, 0.2)';
                    }
                  }}
                  onBlur={(e) => {
                    e.target.style.borderColor = '#374151';
                    e.target.style.boxShadow = 'none';
                  }}
                />
              </div>
              
              {/* Email Field */}
              <div>
                <label style={{
                  display: 'block',
                  color: 'white',
                  marginBottom: '0.5rem',
                  fontWeight: '500',
                  fontSize: isMobile ? '0.875rem' : '1rem'
                }}>
                  Email Address *
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  placeholder="your.email@example.com"
                  required
                  disabled={isSubmitting}
                  style={{
                    width: '100%',
                    padding: isMobile ? '0.625rem 0.875rem' : '0.75rem 1rem',
                    backgroundColor: isSubmitting ? '#0f172a' : '#111827',
                    border: '2px solid #374151',
                    borderRadius: '0.75rem',
                    color: 'white',
                    fontSize: isMobile ? '0.875rem' : '1rem',
                    outline: 'none',
                    transition: 'all 0.3s ease',
                    boxSizing: 'border-box',
                    cursor: isSubmitting ? 'not-allowed' : 'text'
                  }}
                  onFocus={(e) => {
                    if (!isSubmitting) {
                      e.target.style.borderColor = 'white';
                      e.target.style.boxShadow = '0 0 0 2px rgba(255, 255, 255, 0.2)';
                    }
                  }}
                  onBlur={(e) => {
                    e.target.style.borderColor = '#374151';
                    e.target.style.boxShadow = 'none';
                  }}
                />
              </div>
              
              {/* Message Field */}
              <div>
                <label style={{
                  display: 'block',
                  color: 'white',
                  marginBottom: '0.5rem',
                  fontWeight: '500',
                  fontSize: isMobile ? '0.875rem' : '1rem'
                }}>
                  Message *
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  placeholder="Tell me about your project or just say hello..."
                  rows={isMobile ? 4 : 5}
                  required
                  disabled={isSubmitting}
                  style={{
                    width: '100%',
                    padding: isMobile ? '0.625rem 0.875rem' : '0.75rem 1rem',
                    backgroundColor: isSubmitting ? '#0f172a' : '#111827',
                    border: '2px solid #374151',
                    borderRadius: '0.75rem',
                    color: 'white',
                    fontSize: isMobile ? '0.875rem' : '1rem',
                    outline: 'none',
                    resize: 'none',
                    transition: 'all 0.3s ease',
                    fontFamily: 'system-ui, -apple-system, sans-serif',
                    boxSizing: 'border-box',
                    cursor: isSubmitting ? 'not-allowed' : 'text'
                  }}
                  onFocus={(e) => {
                    if (!isSubmitting) {
                      e.target.style.borderColor = 'white';
                      e.target.style.boxShadow = '0 0 0 2px rgba(255, 255, 255, 0.2)';
                    }
                  }}
                  onBlur={(e) => {
                    e.target.style.borderColor = '#374151';
                    e.target.style.boxShadow = 'none';
                  }}
                />
              </div>
              
              {/* Submit Button */}
              <button
                type="submit"
                disabled={isSubmitting}
                style={{
                  width: '100%',
                  padding: isMobile ? '0.875rem 1.5rem' : '1rem 2rem',
                  backgroundColor: isSubmitting ? '#6b7280' : 'white',
                  color: isSubmitting ? '#9ca3af' : 'black',
                  border: 'none',
                  borderRadius: '0.75rem',
                  fontSize: isMobile ? '0.875rem' : '1rem',
                  fontWeight: '600',
                  cursor: isSubmitting ? 'not-allowed' : 'pointer',
                  transition: 'all 0.3s ease',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: '0.5rem'
                }}
                onMouseEnter={(e) => {
                  if (!isMobile && !isSubmitting) {
                    e.target.style.transform = 'scale(1.05)';
                    e.target.style.boxShadow = '0 10px 25px rgba(255, 255, 255, 0.25)';
                  }
                }}
                onMouseLeave={(e) => {
                  if (!isMobile && !isSubmitting) {
                    e.target.style.transform = 'scale(1)';
                    e.target.style.boxShadow = 'none';
                  }
                }}
              >
                <span>
                  {isSubmitting ? 'Sending...' : 
                   submitStatus === 'sending' ? 'Sending...' : 'Send Message'}
                </span>
                <Send size={isMobile ? 16 : 20} />
              </button>
            </form>
          </div>
        </div>

        {/* Bottom CTA */}
        <div style={{ 
          textAlign: 'center', 
          marginTop: isMobile ? '2rem' : '3rem',
          padding: '0 0.5rem'
        }}>
          <div style={{
            display: 'inline-flex',
            alignItems: 'center',
            padding: isMobile ? '0.625rem 1.25rem' : '0.75rem 1.5rem',
            backgroundColor: 'black',
            border: '2px solid #374151',
            borderRadius: '2rem',
            fontSize: isMobile ? '0.8rem' : '0.875rem',
            flexWrap: 'wrap',
            justifyContent: 'center',
            gap: '0.25rem'
          }}>
            <span style={{ 
              color: '#d1d5db', 
              marginRight: isMobile ? '0.25rem' : '0.5rem' 
            }}>
              Response time:
            </span>
            <span style={{ color: 'white', fontWeight: '600' }}>
              Usually within 24 hours
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;