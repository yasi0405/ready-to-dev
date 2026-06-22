'use client';

import {X} from 'lucide-react';
import {useEffect, useId, useRef} from 'react';

export type LegalDialogKind = 'legal' | 'privacy' | null;

type LegalDialogProps = {
  kind: LegalDialogKind;
  locale: string;
  onClose: () => void;
};

const content = {
  fr: {
    legal: {
      title: 'Mentions légales',
      sections: [
        {
          body: [
            'Éditeur du site : Ready To Dev SRL',
            'Siège social : 301 G. Wincqz, 7060 Soignies, Belgique',
            'Numéro d’entreprise / TVA : BE0783791078',
            'Email de contact : yannick.simon@readytodev.be',
            'Directeur de publication : Yannick Simon',
            'Hébergeur : Amazon Web Services, Inc. (AWS) - 410 Terry Ave N, Seattle, WA 98109-5210, USA'
          ]
        },
        {
          title: 'Responsabilité',
          body: ['Les informations du site sont fournies à titre informatif et peuvent être modifiées à tout moment.']
        },
        {
          title: 'Propriété intellectuelle',
          body: ['Textes, visuels, logo et éléments graphiques appartiennent à Ready To Dev SRL sauf mention contraire.']
        }
      ]
    },
    privacy: {
      title: 'Politique de confidentialité',
      sections: [
        {
          title: 'Données collectées',
          body: ['Uniquement les données envoyées volontairement via le formulaire de contact ou par email.']
        },
        {
          title: 'Finalité',
          body: ['Répondre aux demandes, gérer la relation commerciale et assurer le suivi des projets.']
        },
        {
          title: 'Base légale',
          body: ['Intérêt légitime ou consentement selon le contexte.']
        },
        {
          title: 'Conservation',
          body: ['Durée raisonnable nécessaire au traitement de la demande.']
        },
        {
          title: 'Partage',
          body: ['Aucune vente de données personnelles. Partage uniquement avec des prestataires techniques si nécessaire.']
        },
        {
          title: 'Droits',
          body: ['Accès, rectification, suppression, opposition et limitation.']
        },
        {
          title: 'Contact',
          body: ['yannick.simon@readytodev.be']
        },
        {
          title: 'Cookies',
          body: ['Aucun cookie non essentiel n’est utilisé, sauf si un outil analytics est présent.']
        }
      ]
    }
  },
  en: {
    legal: {
      title: 'Legal notice',
      sections: [
        {
          body: [
            'Website publisher: Ready To Dev SRL',
            'Registered office: 301 G. Wincqz, 7060 Soignies, Belgium',
            'Company number / VAT: BE0783791078',
            'Contact email: yannick.simon@readytodev.be',
            'Publication director: Yannick Simon',
            'Hosting provider: Amazon Web Services, Inc. (AWS) - 410 Terry Ave N, Seattle, WA 98109-5210, USA'
          ]
        },
        {
          title: 'Liability',
          body: ['The website information is provided for informational purposes and may change at any time.']
        },
        {
          title: 'Intellectual property',
          body: ['Texts, visuals, logo and graphic elements belong to Ready To Dev SRL unless stated otherwise.']
        }
      ]
    },
    privacy: {
      title: 'Privacy policy',
      sections: [
        {
          title: 'Data collected',
          body: ['Only data voluntarily sent through the contact form or by email.']
        },
        {
          title: 'Purpose',
          body: ['To answer requests, manage the business relationship and follow up on projects.']
        },
        {
          title: 'Legal basis',
          body: ['Legitimate interest or consent depending on the context.']
        },
        {
          title: 'Retention',
          body: ['A reasonable period necessary to handle the request.']
        },
        {
          title: 'Sharing',
          body: ['No sale of personal data. Sharing only with technical providers if needed.']
        },
        {
          title: 'Rights',
          body: ['Access, rectification, erasure, objection and restriction.']
        },
        {
          title: 'Contact',
          body: ['yannick.simon@readytodev.be']
        },
        {
          title: 'Cookies',
          body: ['No non-essential cookies are used unless an analytics tool is present.']
        }
      ]
    }
  }
} as const;

export function LegalDialog({kind, locale, onClose}: LegalDialogProps) {
  const titleId = useId();
  const closeButtonRef = useRef<HTMLButtonElement>(null);
  const previousActiveElement = useRef<HTMLElement | null>(null);
  const lang = locale === 'en' ? 'en' : 'fr';
  const closeLabel = lang === 'fr' ? 'Fermer la fenêtre' : 'Close dialog';
  const dialog = kind ? content[lang][kind] : null;

  useEffect(() => {
    if (!kind) {
      return;
    }

    previousActiveElement.current = document.activeElement instanceof HTMLElement ? document.activeElement : null;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';

    const focusTimer = window.setTimeout(() => closeButtonRef.current?.focus(), 0);

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        onClose();
      }
    };

    window.addEventListener('keydown', onKeyDown);

    return () => {
      window.clearTimeout(focusTimer);
      document.body.style.overflow = previousOverflow;
      window.removeEventListener('keydown', onKeyDown);
      previousActiveElement.current?.focus();
    };
  }, [kind, onClose]);

  if (!dialog) {
    return null;
  }

  return (
    <div className="legal-dialog-backdrop" role="presentation" onClick={onClose}>
      <div
        className="legal-dialog"
        role="dialog"
        aria-modal="true"
        aria-labelledby={titleId}
        onClick={(event) => event.stopPropagation()}
      >
        <button ref={closeButtonRef} type="button" className="legal-dialog-close" onClick={onClose} aria-label={closeLabel}>
          <X aria-hidden="true" size={18} />
        </button>

        <div className="legal-dialog-header">
          <h2 id={titleId}>{dialog.title}</h2>
        </div>

        <div className="legal-dialog-content">
          {dialog.sections.map((section) => {
            const sectionKey = 'title' in section ? section.title : section.body[0];

            return (
              <section key={sectionKey} className="legal-dialog-section">
                {'title' in section ? <h3>{section.title}</h3> : null}
                {section.body.length > 1 ? (
                  <ul>
                    {section.body.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                ) : (
                  <p>{section.body[0]}</p>
                )}
              </section>
            );
          })}
        </div>
      </div>
    </div>
  );
}
