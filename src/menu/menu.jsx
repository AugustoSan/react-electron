import HomeIcon from '@mui/icons-material/Home';
import PersonIcon from '@mui/icons-material/Person';
import PaidIcon from '@mui/icons-material/Paid';
import PointOfSaleIcon from '@mui/icons-material/PointOfSale';
import InventoryIcon from '@mui/icons-material/Inventory';
import RequestQuoteIcon from '@mui/icons-material/RequestQuote';

const home = {
    title: "Inicio",
    href: "/home",
    icon: <HomeIcon />
}

const clientes = {
  title: "Clientes",
  href: "/clientes",
  icon: <PersonIcon />
}
const ingresos = {
  title: "Abonos",
  href: "/ingresos",
  icon: <RequestQuoteIcon />
}
const ventas = {
  title: "Ventas",
  href: "/ventas",
  icon: <PointOfSaleIcon />
}
const productos = {
  title: "Productos",
  href: "/productos",
  icon: <InventoryIcon />
}
const pagos = {
  title: "Pagos",
  href: "/pagos",
  icon: <PaidIcon />
}
export const menuItems = [
  home,
  clientes,
  ingresos,
  ventas,
  pagos,
  productos
]
