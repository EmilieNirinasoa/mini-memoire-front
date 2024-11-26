import React, { useState } from 'react';
import { TextField, Button, Grid, Typography, Stepper, Step, StepLabel, Box, RadioGroup, FormControlLabel, Radio } from '@mui/material';
import axios from 'axios';

const InscriptionP = () => {
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
    'Mot de passe',
    'Confirmation du mot de passe',
    'Adresse',
    'Numéro de téléphone',
    'Sexe',
    'Date de naissance',
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

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:3000/api/inscription', formData);
      console.log("Inscription réussie :", response.data);
    } catch (error) {
      console.error("Erreur lors de l'inscription :", error);
    }
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
            label="Mot de passe"
            type="password"
            name="motDePasse"
            value={formData.motDePasse}
            onChange={handleChange}
            fullWidth
            required
          />
        );
      case 3:
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
      case 4:
        return (
          <TextField
            label="Adresse"
            name="adresse"
            value={formData.adresse}
            onChange={handleChange}
            fullWidth
          />
        );
      case 5:
        return (
          <TextField
            label="Numéro de téléphone"
            name="numeroTelephone"
            value={formData.numeroTelephone}
            onChange={handleChange}
            fullWidth
          />
        );
      case 6:
        return (
          <RadioGroup
            name="sexe"
            value={formData.sexe}
            onChange={handleChange}
          >
            <FormControlLabel value="Homme" control={<Radio />} label="Homme" />
            <FormControlLabel value="Femme" control={<Radio />} label="Femme" />
          </RadioGroup>
        );
      case 7:
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
      case 8:
        return (
          <>
            <Typography variant="h6">Récapitulatif des informations</Typography>
            <Typography>Nom: {formData.nom}</Typography>
            <Typography>Email: {formData.email}</Typography>
            <Typography>Mot de passe: ******</Typography>
            <Typography>Confirmation du mot de passe: ******</Typography>
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

  return (
    <Box sx={{ width: '100%', mt: 3 }}>
      {/* Barre de progression */}
      <Stepper activeStep={step} sx={{ mb: 4 }}>
        {steps.map((label, index) => (
          <Step key={index}>
            <StepLabel>{label}</StepLabel>
          </Step>
        ))}
      </Stepper>

      {/* Formulaire */}
      <form onSubmit={handleSubmit}>
        <Grid container spacing={2} sx={{ mt: 2 }}>
          <Grid item xs={12}>
            {getStepContent(step)}
          </Grid>

          <Grid item xs={12} sx={{ display: 'flex', justifyContent: 'space-between', mt: 2 }}>
            {step > 0 && (
              <Button variant="outlined" onClick={handleBack}>
                Retour
              </Button>
            )}

            {step < steps.length - 1 ? (
              <Button variant="contained" onClick={handleNext}>
                Suivant
              </Button>
            ) : (
              <Button type="submit" variant="contained" color="primary">
                Soumettre
              </Button>
            )}
          </Grid>
        </Grid>
      </form>
    </Box>
  );
};

export default InscriptionP;
