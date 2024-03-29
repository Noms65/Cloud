import { Box, Button, Grid, Table, Paper, TableHead, TableBody, TableRow, Typography, TableCell} from "@mui/material";

import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Container from '@mui/material/Container';



export function FormInput() {
    const handleSubmit = (event) => {
        event.preventDefault();
        const data = new FormData(event.currentTarget);
        console.log({
            email: data.get('email'),
            password: data.get('password'),
        });
    };
    return (

            <Container component="main" maxWidth="xs">
                <CssBaseline />
                <Box
                    sx={{
                        marginTop: 8,
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                    }}
                >
                    <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
                        <TextField
                            margin="normal"
                            required
                            fullWidth
                            name="categorie"
                            label="categorie"
                            type="text"
                            id="categorie"
                            autoComplete="current-password"
                        />
                        <Button
                            type="submit"
                            fullWidth
                            variant="contained"
                            sx={{ mt: 3, mb: 2 }}
                        >
                            Ajouter
                        </Button>
                    </Box>
                </Box>
            </Container>
    );
};

function BouttonOption({ onModifyClick, onDeleteClick }) {
    return (
        <Grid item>
            <Button
                variant="contained"
                style={{
                    backgroundColor: 'green',
                    color: 'white',
                    width: '100px',
                    textTransform: 'uppercase',
                    fontWeight: 'bold',
                    marginRight: '8px',
                }}
                onClick={onModifyClick} 
            >
                Modifier
            </Button>
            <Button
                variant="contained"
                style={{
                    backgroundColor: 'green',
                    color: 'white',
                    width: '100px',
                    textTransform: 'uppercase',
                    fontWeight: 'bold',
                }}
                onClick={onDeleteClick} 
            >
                Supprimer
            </Button>
        </Grid>
        
    );
};

function handleModify() {
    console.log('Modifier button clicked');
  }
  
  function handleDelete() {
    console.log('Supprimer button clicked');
  }

export function Formulaire() {

    return (
        <Grid item xs={12} md={12} lg={12}>
            <Paper sx={{ p: 2, display: 'flex', flexDirection: 'column', maxWidth: '100%' }}>
                <Typography variant="h5" gutterBottom>
                    Liste Categorie
                </Typography>
                <Table size='small'>
                    <TableHead>
                        <TableRow>
                            <TableCell>ID</TableCell>
                            <TableCell>Nom</TableCell>
                            <TableCell>Option</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        <TableRow>
                            <TableCell>1</TableCell>
                            <TableCell>Sport</TableCell>
                            <TableCell><BouttonOption onModifyClick={handleModify} onDeleteClick={handleDelete} /></TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell>2</TableCell>
                            <TableCell>Salon</TableCell>
                            <TableCell><BouttonOption onModifyClick={handleModify} onDeleteClick={handleDelete} /></TableCell>
                        </TableRow>
                    </TableBody>
                </Table>
            </Paper>
        </Grid>
    );
};



const FormulaireElementCategorie = () => {

    return (

        <Box m="100px">
            <Grid container spacing={2}>
                <Box>
                    Ajout Categorie
                </Box>
                <FormInput />
                <Formulaire />
            </Grid>
        </Box>

    );
};

export default FormulaireElementCategorie;