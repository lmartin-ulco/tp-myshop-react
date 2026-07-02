import CartPage from "../pages/CartPage.tsx";
import ShopPage from "../pages/ShopPage.tsx";
import {Link} from "react-router-dom";
import {AppBar, Box, Button, Container, Toolbar, Typography} from "@mui/material";
import {ShoppingBag, ShoppingCart} from "lucide-react";


export default function Navigation() {
    return (
        <AppBar position="sticky" color="inherit" elevation={0} className="app-nav">
            <Container maxWidth="lg">
                <Toolbar disableGutters className="app-nav__toolbar">
                    <Box className="app-nav__brand">
                        <ShoppingBag size={24}/>
                        <Typography variant="h6" component="p">
                            My Shop
                        </Typography>
                    </Box>
                    <Box className="app-nav__links">
                        <Button startIcon={<ShoppingBag size={18}/>} className="nav-link">
                            <Link to={ShopPage.PATH} >
                                Shop
                            </Link>
                        </Button>
                        <Button startIcon={<ShoppingCart size={18}/>}>
                            <Link to={CartPage.PATH}>
                                Cart
                            </Link>
                        </Button>
                    </Box>
                </Toolbar>
            </Container>
        </AppBar>
    )
}