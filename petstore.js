
/**
 * This function should calculate the total amount of pet food that should be
 * ordered for the upcoming week.
 * @param numAnimals the number of animals in the store
 * @param avgFood the average amount of food (in kilograms) eaten by the animals
 * 				each week
 * @return the total amount of pet food that should be ordered for the upcoming
 * 				 week, or -1 if the numAnimals or avgFood are less than 0 or non-numeric
 */
function calculateFoodOrder(numAnimals, avgFood) {
    if ( numAnimals < 0 | isNaN(numAnimals) | avgFood < 0 | isNaN(avgFood) ) {
        return -1 ;
    }
    else {
        var FoodOrder = numAnimals*avgFood ;
        return FoodOrder;
    }
}

/**
 * Determines which day of the week had the most nnumber of people visiting the
 * pet store. If more than one day of the week has the same, highest amount of
 * traffic, an array containing the days (in any order) should be returned.
 * (ex. ["Wednesday", "Thursday"]). If the input is null or an empty array, the function
 * should return null.
 * @param week an array of Weekday objects
 * @return a string containing the name of the most popular day of the week if there is only one most popular day, and an array of the strings containing the names of the most popular days if there are more than one that are most popular
 */
function mostPopularDays(week) {

    if (week){
        // Find the maximum value out of the array   
        var res = Math.max.apply(Math,week.map(function(o){return o.traffic;}))
        // initializing variables
        var populardays =[];
        for (i=0; i < week.length; i++)
        {
            if (week[i].traffic == res)
            {
                populardays.push(week[i].name);
            }
        }
        // print as string if there is only one popular day
        if (populardays.length == 1){
            days = populardays[0];
            return days;
            }
        // print as array for multiple days with same value
        else{
            return populardays;
            }
    }
    else{
        return null;
    }
}


// downside of this function is that week array is also changed.
function mostPopularDays1(week) {

    if (week){    
        var res = Math.max.apply(Math,week.map(function(o){return o.traffic;}))
        // console.log(res);
        days = week;
        // console.log(days);
        
        for (i=0; i < days.length; i++)
        {
            if (days[i].traffic != res)
            {
                days.splice(i,1);
                // console.log('changeddays:'+days);
            } 
        }
        // console.log(days.length);
        if (days.length == 1){
            var populardays = days[0].name;
        }
        else{
            for (i=1; i<days.length; i++){
                var populardays = [''];
                populardays.splice(0,1,days[0].name);
                populardays.push(days[i].name);
                // console.log('moredays:'+populardays);
            }
            
        }
        
        return populardays;
    }
    else{
        return null;
    }
}


/**
 * Given three arrays of equal length containing information about a list of
 * animals - where names[i], types[i], and breeds[i] all relate to a single
 * animal - return an array of Animal objects constructed from the provided
 * info.
 * @param names the array of animal names
 * @param types the array of animal types (ex. "Dog", "Cat", "Bird")
 * @param breeds the array of animal breeds
 * @return an array of Animal objects containing the animals' information, or an
 *         empty array if the array's lengths are unequal or zero, or if any array is null.
 */
function createAnimalObjects(names, types, breeds) {
    var animals = [];
    if (names.length == types.length && names.length == breeds.length){
        for (i=0; i < names.length; i++){
            animals.push(new Animal(names[i], types[i], breeds[i]));
        }
    }
    return animals;
}

/////////////////////////////////////////////////////////////////
//
//  Do not change any code below here!
//
/////////////////////////////////////////////////////////////////


/**
 * A prototype to create Weekday objects
 */
function Weekday (name, traffic) {
    this.name = name;
    this.traffic = traffic;
}

/**
 * A prototype to create Item objects
 */
function Item (name, barcode, sellingPrice, buyingPrice) {
     this.name = name;
     this.barcode = barcode;
     this.sellingPrice = sellingPrice;
     this.buyingPrice = buyingPrice;
}
 /**
  * A prototype to create Animal objects
  */
function Animal (name, type, breed) {
    this.name = name;
     this.type = type;
     this.breed = breed;
}


/**
 * Use this function to test whether you are able to run JavaScript
 * from your browser's console.
 */
function helloworld() {
    return 'hello world!';
}

