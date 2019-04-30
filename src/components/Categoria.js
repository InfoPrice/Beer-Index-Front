import React, { Component } from 'react';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import Typography from '@material-ui/core/Typography';
import { Link } from 'react-router-dom';

class Categoria extends Component {    

    render() {
        return (
            <Grid item xs={12} className="categoria">
                <Link className="text-decoration-none" to="/mais-barato">
                    <Card className="item-categoria">
                        <CardActionArea>
                            <img className="img-card-categoria" src={require('../assets/1.jpg')} alt="Logo" />
                            <Typography className="categoria-title" gutterBottom variant="h5" component="h2">
                                Mais barato
                            </Typography>
                        </CardActionArea>
                    </Card>
                </Link>

                <Link className="text-decoration-none" to="/mais-proximo">
                    <Card className="item-categoria">
                        <CardActionArea>
                            <img className="img-card-categoria" src={require('../assets/2.jpg')} alt="Logo" />
                            <Typography className="categoria-title" gutterBottom variant="h5" component="h2">
                                Mais próximo
                            </Typography>
                        </CardActionArea>
                    </Card>
                </Link>

                <Link className="text-decoration-none" to="/sugestao">
                    <Card className="item-categoria">
                        <CardActionArea>
                            <img className="img-card-categoria" src={require('../assets/3.jpg')} alt="Logo" />
                            <Typography className="categoria-title" gutterBottom variant="h5" component="h2">
                                Sugestão
                            </Typography>
                        </CardActionArea>
                    </Card>
                </Link>
            </Grid >
        )
    }
}

export default Categoria;