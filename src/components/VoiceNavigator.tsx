import React, { useEffect } from 'react';

declare global {
  interface Window {
    SpeechRecognition: any;
    webkitSpeechRecognition: any;
  }
}

export const VoiceNavigator: React.FC = () => {
  useEffect(() => {
    const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
    if (SpeechRecognition) {
      const recognition = new SpeechRecognition();
      recognition.continuous = true;
      recognition.lang = 'ar-SA';
      
      recognition.onresult = (event: any) => {
        const command = event.results[event.results.length - 1][0].transcript.toLowerCase();
        console.log('Voice Command:', command);
        if (command.includes('اذهب للدورة')) {
            // handle navigation to course
        }
      };
      
      recognition.start();
      return () => recognition.stop();
    }
  }, []);

  return null;
};
