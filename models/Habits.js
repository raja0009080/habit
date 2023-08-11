const mongoose = require('mongoose');

const habitSchema = new mongoose.Schema({
    habit:{
        type : String,
        required:true
    },
    description:{
        type:String,
        
    },
    // end : {
    //     type:String
    // },
    frequency : {
        type:String,
        required:true
    },
    end: {
        
        type: String, // Change the type to String
        // The 'date' field will be stored with month, day, and year (Mon DD, YYYY)
        get: (value) => {
            if (!value) return undefined;
            const date = new Date(value);
            const month = date.toLocaleString('en-US', { month: 'short' });
            const day = String(date.getDate()).padStart(2, '0');
            const year = date.getFullYear();
            return `${month} ${day}, ${year}`; // Format: Mon DD, YYYY (e.g., "Aug 07, 2023")
        },
        set: (value) => {
            if (!value) return undefined;
            return new Date(value); // Parsing the date string to Date object
        },
        // type:Date,
        
        // // The 'date' field will be stored with only date, month, and year
        // get: (value) => {
        //   if (!value) return undefined;
        //   return value.toISOString().slice(0, 10); // Extracting only date (YYYY-MM-DD)
        // },
        // set: (value) => {
        //   if (!value) return undefined;
        //   return new Date(value); // Parsing the date string to Date object
        // },
      },
    date: {
        type: String, // Change the type to String
        // The 'date' field will be stored with month, day, and year (Mon DD, YYYY)
        get: (value) => {
            if (!value) return undefined;
            const date = new Date(value);
            const month = date.toLocaleString('en-US', { month: 'short' });
            const day = String(date.getDate()).padStart(2, '0');
            const year = date.getFullYear();
            return `${month} ${day}, ${year}`; // Format: Mon DD, YYYY (e.g., "Aug 07, 2023")
        },
        set: (value) => {
            if (!value) return undefined;
            return new Date(value); // Parsing the date string to Date object
        },
    },
    
   
    
    time:{
        type:String,
        required:true
    },
    streak:{
        type:Number,
        default:0
    },
    days:{
        MON:{
            type:String,
            default:null
        },
        TUES:{
            type:String,
            default:null
        },
        WED:{
            type:String,
            default:null
        },
        THUS:{
            type:String,
            default:null
        },
        FRI:{
            type:String,
            default:null
        },
        SAT:{
            type:String,
            default:null
        },
        SUN:{
            type:String,
            default:null
        }
    }


});

const Habit = mongoose.model('Habit',habitSchema);

module.exports = Habit;