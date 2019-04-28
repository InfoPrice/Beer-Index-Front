import React, { Component } from 'react';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import Typography from '@material-ui/core/Typography';
import { CardContent } from '@material-ui/core';
import * as produtoService from '../utils/produtoService';

class List extends Component {

    state = {
        cervejas: [],
        lat: null,
        lon: null
    }


    getProximos() {
        produtoService.getProdutos(this.state.lat, this.state.lon).then((response) => this.setState({
            cervejas: response
        }))
    }

    componentWillMount() {
        navigator.geolocation.getCurrentPosition(location => {
            this.setState({
                lat: location.coords.latitude,
                lon: location.coords.longitude
            });
        });

        if(this.props === "proximo"){
            this.getProximos();
        }
    }

    render() {
        const cervejas = [{"bairro": "Vila Mariana", "categoria": "Cervejas", "cd_identificador": "07896045503414", "cidade": "S\\u00c3O PAULO", "complemento": "LOJA B12", "descricao": "CERVEJA TRADICIONAL CLARA KAISER LATA 473ML", "foto": "http://s3.amazonaws.com/infoprice-prd-imagens/gtin/07896045503414.jpg", "gramatura": "ML", "latitude": -21.195389, "logradouro": "Rua do Hacckaton", "loja": "CARREFOUR_11405", "longitude": -50.459054, "marca": "KAISER", "numero": "123", "preco": 3.45, "rede": "Carrefour", "secao": "Bebidas", "uf": "SP", "ultima_data": "Sat, 27 Apr 2019 00:00:00 GMT", "valor_gramatura": "473"}, {"bairro": "Vila Mariana", "categoria": "Cervejas", "cd_identificador": "07896045503414", "cidade": "S\\u00c3O PAULO", "complemento": "LOJA B12", "descricao": "CERVEJA TRADICIONAL CLARA KAISER LATA 473ML", "foto": "http://s3.amazonaws.com/infoprice-prd-imagens/gtin/07896045503414.jpg", "gramatura": "ML", "latitude": -21.195389, "logradouro": "Rua do Hacckaton", "loja": "CARREFOUR_11405", "longitude": -50.459054, "marca": "KAISER", "numero": "123", "preco": 3.45, "rede": "Carrefour", "secao": "Bebidas", "uf": "SP", "ultima_data": "Sat, 27 Apr 2019 00:00:00 GMT", "valor_gramatura": "473"}, {"bairro": "Vila Mariana", "categoria": "Cervejas", "cd_identificador": "07896045503414", "cidade": "S\\u00c3O PAULO", "complemento": "LOJA B12", "descricao": "CERVEJA TRADICIONAL CLARA KAISER LATA 473ML", "foto": "http://s3.amazonaws.com/infoprice-prd-imagens/gtin/07896045503414.jpg", "gramatura": "ML", "latitude": -21.195389, "logradouro": "Rua do Hacckaton", "loja": "CARREFOUR_11405", "longitude": -50.459054, "marca": "KAISER", "numero": "123", "preco": 3.45, "rede": "Carrefour", "secao": "Bebidas", "uf": "SP", "ultima_data": "Sat, 27 Apr 2019 00:00:00 GMT", "valor_gramatura": "473"}, {"bairro": "Vila Mariana", "categoria": "Cervejas", "cd_identificador": "07896045503414", "cidade": "S\\u00c3O PAULO", "complemento": "LOJA B12", "descricao": "CERVEJA TRADICIONAL CLARA KAISER LATA 473ML", "foto": "http://s3.amazonaws.com/infoprice-prd-imagens/gtin/07896045503414.jpg", "gramatura": "ML", "latitude": -21.195389, "logradouro": "Rua do Hacckaton", "loja": "CARREFOUR_11405", "longitude": -50.459054, "marca": "KAISER", "numero": "123", "preco": 3.45, "rede": "Carrefour", "secao": "Bebidas", "uf": "SP", "ultima_data": "Sat, 27 Apr 2019 00:00:00 GMT", "valor_gramatura": "473"}];
        return (
            <Grid item xs={12} className="produtos">
                  {cervejas.map((cerveja) => (

                    <Card key={cerveja.cd_identificador} className="cards">
                        <Grid  className="list" item xs={12}>

                            <Grid item xs={4}>
                                <CardActionArea >
                                    <div>
                                        <img className="arruma-imagem" src={cerveja.foto} alt="cerveja"/>
                                    </div>                              
                                </CardActionArea>
                            </Grid>
                            <Grid item xs={8}>
                                <CardContent >
                                    <Typography gutterBottom variant="h5" component="p" className="arruma-texto">
                                        {cerveja.descricao}
                                    </Typography>
                                    <span className="distancia-produto">{cerveja.rede}</span><span className="preco-produto">R$ {cerveja.preco}</span>                              
                                </CardContent>
                            </Grid>
                        </Grid>          
                    </Card>
                  ))}
            </Grid>
        )
    }
}

export default List