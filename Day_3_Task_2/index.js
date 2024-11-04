const express = require('express');
const multer = require('multer');
const path = require('path');

const app = express();
const port = 9000;

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));
app.use(express.static('public'));
app.use(express.urlencoded({ extended: true }));

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'public/uploads');
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + path.extname(file.originalname));
  }
});
const upload = multer({ storage });

const products = [
  { name: 'Product 1', description: 'Description for Product 1', image: 'uploads/product1.jpg' },
  { name: 'Product 2', description: 'Description for Product 2', image: 'uploads/product2.jpg' },
  { name: 'Product 3', description: 'Description for Product 3', image: 'uploads/product3.jpg' }
];

app.get('/', (req, res) => {
  res.render('catalog', { products });
});

app.get('/upload', (req, res) => {
  res.render('upload');
});

app.post('/upload', upload.single('productImage'), (req, res) => {
  const newProduct = {
    name: req.body.productName,
    description: req.body.productDescription || 'No description available',
    image: req.file ? `uploads/${req.file.filename}` : null
  };
  products.push(newProduct);
  res.redirect('/');
});

app.post('/add-product', (req, res) => {
  const newProductName = req.body.productName;
  const newProductDescription = req.body.productDescription || 'No description available';
  const newProduct = {
    name: newProductName,
    description: newProductDescription,
    image: 'uploads/default.jpg' // Placeholder if no image is uploaded
  };
  products.push(newProduct);
  res.redirect('/');
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
