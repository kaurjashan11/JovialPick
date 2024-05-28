var nodemailer=require('nodemailer');
async function sendVarifyMail(to_email)
{
let transporter=nodemailer.createTransport({
    service:"gmail",
    host:"smtp.gmail.com",
    port:465,
    secure:false,
    auth:{
        user:"jashanpreet2179@gmail.com",
        pass:"godfgfitfvixdyfr"
    }
});
let info= await transporter.sendMail({
    to:to_email,
    from:"jashanpreet2179@gmail.com",
    subject:"JovialPick Offers",
    html:"<h2>Thank You! Now you will get all updates regarding the offers we provide</h2>"
});
if(info.messageId)
    return true;
else
    return false;
}
module.exports=sendVarifyMail;
