const Habit=require('../models/Habits');
module.exports.home= async function(req,res){
    const habits = await Habit.find({})
    return res.render('layout',{
        title:"Habit Tracker",
 // create_habit is ID for send data in home ejs file where we use for append 
        habit_list:habits })
};
// createHabit is accese of controller for route
module.exports.creatHabit= async function(req,res){
   const habits =await  Habit.create({
        habit : req.body.habit,
        end : req.body.end,
        description:req.body.description,
        frequency:req.body.frequency,
        date:Date(),
        
        time:req.body.time,
       
        
    })
    console.log(req.body.habit);
    return res.redirect("/");
};

// controller to delete a habit
// module.exports.deleteHabit =async function(req,res){
//     let id = req.body.habit_list;
//     const habits = await Habit.findByIdAndDelete(id,function(err){
//         if(err){
//             console.log("Error in deleting Habit");
//             return;
//         }
//         return res.redirect('back');

//     });
// }
module.exports.deleteHabit = async function(req, res) {
    let id = req.query.id;
    console.log(id);
    try {
        const deletedHabit = await Habit.findByIdAndDelete(id);
        console.log(deletedHabit);
        if (!deletedHabit) {
            console.log("Habit not found or already deleted");
            
        } else {
            console.log("Habit deleted successfully");

        }
    } catch (err) {
        console.log("Error in deleting Habit:", err);
    }

    return res.redirect('back');
};
