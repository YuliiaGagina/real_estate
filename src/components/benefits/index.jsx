import Lux from "../../assets/lux.jpg";

import {
  AcademicCapIcon,
  HomeModernIcon,
  UserGroupIcon,
} from "@heroicons/react/20/solid";
import { motion } from "framer-motion";
import Benefit from "./Benefit";

import Button from "./../Button";

import HText from "../HText";

const benefits = [
  {
    icon: <HomeModernIcon className="h-6 w-6" />,
    title: "Sicurezza e Stabilità",
    description:
      "Gli investimenti immobiliari offrono una sicurezza e una stabilità senza pari. Con l'immobiliare, potete contare su un reddito costante nel tempo, garantendo una tranquillità finanziaria a lungo termine. Inoltre, la proprietà immobiliare può fungere da baluardo contro le instabilità del mercato finanziario, offrendovi una protezione affidabile per il vostro patrimonio.",
  },
  {
    icon: <UserGroupIcon className="h-6 w-6" />,
    title: "Crescita del Capitale",
    description:
      "Investire nell'immobiliare offre la possibilità di una crescita significativa del capitale nel corso del tempo. Le proprietà immobiliari tendono ad apprezzarsi di valore nel lungo periodo, consentendovi di ottenere un ritorno sostanziale sull'investimento quando decidete di vendere. Questa crescita del capitale può rappresentare un'importante fonte di ricchezza e prosperità per il vostro futuro finanziario.",
  },
  {
    icon: <AcademicCapIcon className="h-6 w-6" />,
    title: "Diversificazione del Portafoglio",
    description:
      "La diversificazione del portafoglio è fondamentale per ridurre il rischio degli investimenti. Gli investimenti immobiliari offrono un'opportunità unica per diversificare il vostro portafoglio, fornendo una solida alternativa alle tradizionali azioni e obbligazioni. Con una combinazione equilibrata di investimenti immobiliari e altri asset finanziari, potete creare un portafoglio resistente e ben bilanciato, in grado di affrontare con successo le sfide del mercato.",
  },
];

const container = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.2 },
  },
};

const Benefits = () => {
  return (
    <section id="benefits" className="mx-auto min-h-full w-5/6 py-20">
      <motion.div>
        <motion.div
          className="md:my-5 md:w-3/5"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 },
          }}
        >
          <HText>Investire in Immobili: Guida Completa per Principianti</HText>
          <p className="my-5 text-sm">
            Benvenuti alla nostra guida completa sull'investimento immobiliare.
            Se siete nuovi in questo settore, non preoccupatevi: siamo qui per
            guidarvi passo dopo passo attraverso il mondo degli investimenti
            immobiliari. Che siate alla ricerca di un reddito passivo o di una
            solida strategia di investimento a lungo termine, sarete felici di
            scoprire quanto l'immobiliare possa offrire.
          </p>
        </motion.div>

        <motion.div
          className="mt-5 items-center justify-between gap-8 md:flex"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          variants={container}
        >
          {benefits.map((benefit) => (
            <Benefit
              key={benefit.title}
              icon={benefit.icon}
              title={benefit.title}
              description={benefit.description}
            />
          ))}
        </motion.div>

        <div className="mt-16 items-center justify-between gap-20 md:mt-28 md:flex">
          {/* GRAPHIC */}
          <img
            className="mx-auto h-3/5"
            alt="benefits-page-graphic"
            src={Lux}
          />

          {/* DESCRIPTION */}
          <div>
            {/* TITLE */}
            <div className="relative">
              <div className="before:absolute before:-top-20 before:-left-20 before:z-[1] before:content-abstractwaves">
                <motion.div
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.5 }}
                  transition={{ duration: 0.5 }}
                  variants={{
                    hidden: { opacity: 0, x: 50 },
                    visible: { opacity: 1, x: 0 },
                  }}
                >
                  <HText>
                    La nostra azienda è la
                    <span className="text-primary-500">migliore!</span>
                  </HText>
                </motion.div>
              </div>
            </div>

            {/* DESCRIPT */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.5 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              variants={{
                hidden: { opacity: 0, x: 50 },
                visible: { opacity: 1, x: 0 },
              }}
            >
              <p className="my-5">
                La nostra azienda si distingue per la sua dedizione
                all'eccellenza in ogni aspetto del nostro operato. Con un team
                altamente qualificato e una lunga esperienza nel settore, ci
                impegniamo costantemente a superare le aspettative dei nostri
                clienti. La nostra reputazione di affidabilità e qualità ci
                rende la scelta preferita per coloro che cercano risultati
                superiori.
              </p>
              <p className="mb-5">
                Presso la nostra azienda, il perseguimento della perfezione è al
                centro di tutto ciò che facciamo. Ci sforziamo di mantenere gli
                standard più elevati in termini di servizio clienti, innovazione
                e integrità aziendale. Siamo orgogliosi di offrire soluzioni su
                misura e di lavorare instancabilmente per garantire la
                soddisfazione dei nostri clienti, dimostrando così la nostra
                posizione come leader del settore.
              </p>
            </motion.div>

            {/* BUTTON */}
            <div className="relative mt-16">
              <div className="before:absolute before:-bottom-20 before:right-40 before:z-[-1] before:content-sparkles">
                <Button to="contacts">Iscriviti adesso</Button>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default Benefits;
