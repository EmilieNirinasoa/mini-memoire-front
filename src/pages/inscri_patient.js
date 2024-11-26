import React, { useState } from 'react';
import {
  TextField,
  Button,
  Grid,
  Typography,
  Stepper,
  Step,
  StepLabel,
  Box,
  RadioGroup,
  FormControlLabel,
  Radio,
  useMediaQuery,
} from '@mui/material';
import Image from '../image/Image.png';

const Inscription = () => {
  const [formData, setFormData] = useState({
    nom: '',
    email: '',
    motDePasse: '',
    confirmationMotDePasse: '',
    adresse: '',
    numeroTelephone: '',
    sexe: '',
    dateNaissance: '',
  });

  const steps = [
    'Nom',
    'Email',
    'Adresse',
    'Numéro de téléphone',
    'Sexe',
    'Date de naissance',
    'Mot de passe',
    'Confirmation du mot de passe',
    'Récapitulatif',
  ];

  const [step, setStep] = useState(0);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleNext = () => {
    if (step < steps.length - 1) setStep(step + 1);
  };

  const handleBack = () => {
    if (step > 0) setStep(step - 1);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form Data:', formData);
  };

  const getStepContent = (step) => {
    switch (step) {
      case 0:
        return (
          <TextField
            label="Nom"
            name="nom"
            value={formData.nom}
            onChange={handleChange}
            fullWidth
            required
          />
        );
      case 1:
        return (
          <TextField
            label="Email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            fullWidth
            required
          />
        );
    
      case 2:
        return (
          <TextField
            label="Adresse"
            name="adresse"
            value={formData.adresse}
            onChange={handleChange}
            fullWidth
          />
        );
      case 3:
        return (
          <TextField
            label="Numéro de téléphone"
            name="numeroTelephone"
            value={formData.numeroTelephone}
            onChange={handleChange}
            fullWidth
          />
        );
      case 4:
        return (
          <RadioGroup name="sexe" value={formData.sexe} onChange={handleChange}>
            <FormControlLabel value="Homme" control={<Radio />} label="Homme" />
            <FormControlLabel value="Femme" control={<Radio />} label="Femme" />
          </RadioGroup>
        );
      case 5:
        return (
          <TextField
            label="Date de naissance"
            type="date"
            name="dateNaissance"
            value={formData.dateNaissance}
            onChange={handleChange}
            fullWidth
            InputLabelProps={{
              shrink: true,
            }}
          />
        );
        case 6:
          return (
            <TextField
              label="Mot de passe"
              type="password"
              name="motDePasse"
              value={formData.motDePasse}
              onChange={handleChange}
              fullWidth
              required
            />
          );
        case 7:
          return (
            <TextField
              label="Confirmation du mot de passe"
              type="password"
              name="confirmationMotDePasse"
              value={formData.confirmationMotDePasse}
              onChange={handleChange}
              fullWidth
              required
            />
          );
      case 8:
        return (
          <>
            <Typography variant="h6">Récapitulatif des informations</Typography>
            <Typography>Nom: {formData.nom}</Typography>
            <Typography>Email: {formData.email}</Typography>
            <Typography>Adresse: {formData.adresse}</Typography>
            <Typography>Numéro de téléphone: {formData.numeroTelephone}</Typography>
            <Typography>Sexe: {formData.sexe}</Typography>
            <Typography>Date de naissance: {formData.dateNaissance}</Typography>
          </>
        );
      default:
        return 'Étape inconnue';
    }
  };

  const isMobile = useMediaQuery('(max-width:750px)');

  return (
    <div className="min-h-screen flex items-center justify-center bg-purple-600 p-4">
      <Box
        sx={{
          width: '100%',
          maxWidth: 600,
          mx: 'auto',
          '@media (max-width: 600px)': {
            maxWidth: '100%',
            padding: 2,
          },
        }}
      >
        {/* Étapes */}
        <Stepper
  activeStep={step}
  alternativeLabel
  sx={{
    mb: 4,
    '& .MuiStepIcon-root': {
      color: '#9C27B0', // Violet pour les icônes non actives
    },
    '& .MuiStepIcon-active': {
      color: '#7B1FA2', // Violet foncé pour l'icône active
    },
    '& .MuiStepIcon-completed': {
      color: '#9C27B0', // Violet pour les étapes terminées
      '& .MuiStepIcon-text': {
        fill: '#9C27B0', // Couleur violette pour le numéro
      },
    },
    '& .MuiStepLabel-label': {
      color: 'white', // Texte des labels en blanc
      display: isMobile ? 'none' : 'block', // Masquer les noms des étapes en mode mobile
    },
  }}
>
  {steps.map((label, index) => (
    <Step key={index}>
      <StepLabel>{label}</StepLabel>
    </Step>
  ))}
</Stepper>


        {/* Carte principale */}
        <div className="bg-white bg-opacity-90 rounded-lg shadow-xl p-8">
          <div className="flex justify-center mb-6">
            <div className="w-20 h-20 bg-purple-600 rounded-full flex items-center justify-center">
              <img src={Image} alt="logo" className="w-12 h-12" />
            </div>
          </div>
          <h1 className="text-2xl font-bold text-center text-purple-800 mb-6">
            Inscription du nouveau patient
          </h1>
          {/* Formulaire */}
          <form onSubmit={handleSubmit}>
            <Grid container spacing={2}>
              <Grid item xs={12}>
                {getStepContent(step)}
              </Grid>
              <Grid item xs={12} sx={{ display: 'flex', justifyContent: 'space-between', mt: 2 }}>
                {step > 0 && (
                  <Button
                    variant="outlined"
                    onClick={handleBack}
                    sx={{
                      borderColor: '#616161', // Gris foncé
                      color: '#616161',
                      '&:hover': {
                        borderColor: '#424242',
                        color: '#424242',
                      },
                    }}
                  >
                    Retour
                  </Button>
                )}
                {step < steps.length - 1 ? (
                  <Button
                    variant="contained"
                    onClick={handleNext}
                    sx={{
                      backgroundColor: '#616161', // Gris foncé
                      '&:hover': {
                        backgroundColor: '#424242',
                      },
                    }}
                  >
                    Suivant
                  </Button>
                ) : (
                  <Button type="submit" variant="contained" color="success">
                    Soumettre
                  </Button>
                )}
              </Grid>
            </Grid>
          </form>
        </div>
      </Box>
    </div>
  );
};

export default Inscription;
