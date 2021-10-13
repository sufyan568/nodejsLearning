const path=require('path');
const express =require('express');
const bodyParser=require('body-parser')

const rootDir=require('./util/path');

const adminData=require('./routes/admin');
const generalRoutes=require('./routes/generic');

const app =express();


app.set('view engine','ejs');
app.set('views','views')

app.use(bodyParser.urlencoded({extended:false}));
// admin Routes
app.use('/admin',adminData.routes);
// General Routes
app.use('/general',generalRoutes);

app.use(express.static(path.join(__dirname,'public')));
// Error Route
app.use((req,res,next)=>{
    res.status(404).render('404',{pageTitle:'Page Not Found'});
});
    
app.listen(3000);

