const consultationModel= require("../../db/models/consultationModel")

// all buys
const getconsultations = async (req,res)=>{
    try {
        const  Buy = await consultationModel.find({});
        res.status(200).json( Buy)
      } catch (error){
        res.send(error)     
    }
}
const getanswer = async (req,res)=>{
    try {
        const  Buy = await consultationModel.find({});
        res.status(200).json( Buy)
      } catch (error){
        res.send(error)     
    }
}

const Addconsultations=async(req,res)=>{
    const{consultation}= req.body;
    const nrwAqar = new consultationModel({consultation})
    try {
        const saved= await nrwAqar.save()
        res.status(200).json(saved)
  
    } catch (error) {
        res.send(error)
    }
}

const Addanswer=async(req,res)=>{

    const { answer } = req.body;
    const { id } = req.params;
    console.log("id :",id, "answer :",answer);
    try {
      const addanswer = await consultationModel.findOneAndUpdate(
          { _id: id },
          { $push: { answer } },
          { new: true }
        )
  
      res.status(201).json(addanswer);
      console.log(addanswer);
    } catch (error) {
      res.send(error);
    }
}


module.exports = {getconsultations ,getanswer,Addconsultations,Addanswer};
