const path=require('path');
const express =require('express');
const bodyParser=require('body-parser');
const errorController=require('./controller/error');
const adminRoutes=require('./routes/admin');
const generalRoutes=require('./routes/generic');

const app =express();


app.set('view engine','ejs');
app.set('views','views')

app.use(bodyParser.urlencoded({extended:false}));
// admin Routes
app.use('/admin',adminRoutes);
// General Routes
app.use('/general',generalRoutes);

app.use(express.static(path.join(__dirname,'public')));
// Error Route
app.use(errorController.get404);
    
app.listen(3000);

