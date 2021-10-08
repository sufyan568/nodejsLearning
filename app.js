const express =require('express');
const bodyParser=require('body-parser')
const adminRoutes=require('./routes/admin');
const generalRoutes=require('./routes/generic');

const app =express();
app.use(bodyParser.urlencoded({extended:false}));
// admin Routes
app.use('/admin',adminRoutes);
// General Routes
app.use('/general',generalRoutes);

// Error Route
app.use((req,res,next)=>{
    res.status(404).send('<h1><center>Route Not Found</center></h1>');
});
    
app.listen(3000);