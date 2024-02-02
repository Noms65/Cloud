import { Box, Grid, Table, Paper, TableHead, TableBody, TableRow, Typography, TableCell} from "@mui/material";

export function User() {

    return (
        <Grid item xs={12} md={12} lg={12}>
            <Paper sx={{ p: 2, display: 'flex', flexDirection: 'column', maxWidth: '100%' }}>
                <Typography variant="h5" gutterBottom>
                    Liste User
                </Typography>
                <Table size='small'>
                    <TableHead>
                        <TableRow>
                            <TableCell>ID</TableCell>
                            <TableCell>Nom</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        <TableRow>
                            <TableCell>1</TableCell>
                            <TableCell>user 1</TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell>2</TableCell>
                            <TableCell>user 2</TableCell>
                        </TableRow>
                    </TableBody>
                </Table>
            </Paper>
        </Grid>
    );
};

export function AnnonceAttente() {

    return (
        <Grid item xs={12} md={12} lg={12}>
            <Paper sx={{ p: 2, display: 'flex', flexDirection: 'column', maxWidth: '100%' }}>
                <Typography variant="h5" gutterBottom>
                    Liste Annonce en attente
                </Typography>
                <Table size='small'>
                    <TableHead>
                        <TableRow>
                            <TableCell>ID</TableCell>
                            <TableCell>Titre</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        <TableRow>
                            <TableCell>1</TableCell>
                            <TableCell>Annonce 1</TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell>2</TableCell>
                            <TableCell>Annonce 2</TableCell>
                        </TableRow>
                    </TableBody>
                </Table>
            </Paper>
        </Grid>
    );
};

export function VoitureVente() {

    return (
        <Grid item xs={12} md={12} lg={12}>
            <Paper sx={{ p: 2, display: 'flex', flexDirection: 'column', maxWidth: '100%' }}>
                <Typography variant="h5" gutterBottom>
                    Liste Voiture en vente
                </Typography>
                <Table size='small'>
                    <TableHead>
                        <TableRow>
                            <TableCell>ID</TableCell>
                            <TableCell>Nom</TableCell>
                            <TableCell>Categorie</TableCell>
                            <TableCell>Modele</TableCell>
                            <TableCell>Marque</TableCell>
                            <TableCell>Carburant</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        <TableRow>
                            <TableCell>1</TableCell>
                            <TableCell>fiara</TableCell>
                            <TableCell>sport</TableCell>
                            <TableCell>4 * 4</TableCell>
                            <TableCell>toyota</TableCell>
                            <TableCell>diesel</TableCell>
                        </TableRow>
                        <TableRow>
                        <TableCell>1</TableCell>
                            <TableCell>fiara</TableCell>
                            <TableCell>sport</TableCell>
                            <TableCell>205</TableCell>
                            <TableCell>pezotra</TableCell>
                            <TableCell>diesel</TableCell>
                        </TableRow>
                    </TableBody>
                </Table>
            </Paper>
        </Grid>
    );
};

export function AnnonceTotal() {

    return (
        <Grid item xs={12} md={12} lg={12}>
            <Paper sx={{ p: 2, display: 'flex', flexDirection: 'column', maxWidth: '100%' }}>
                <Typography variant="h5" gutterBottom>
                    Tous les Annonces
                </Typography>
                <Table size='small'>
                    <TableHead>
                        <TableRow>
                            <TableCell>ID</TableCell>
                            <TableCell>Titre</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        <TableRow>
                            <TableCell>1</TableCell>
                            <TableCell>Annonce 1</TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell>2</TableCell>
                            <TableCell>Annonce 2</TableCell>
                        </TableRow>
                    </TableBody>
                </Table>
            </Paper>
        </Grid>
    );
};

const Acceuille = () => {

    return (

        <Box m="100px">
            <Grid container spacing={2}>
                <Box>
                    Statistique tableau
                </Box>
                <User/>
                <AnnonceAttente/>
                <VoitureVente/>
                <AnnonceTotal/>
            </Grid>
        </Box>

    );
};

export default Acceuille;