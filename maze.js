
document.addEventListener('DOMContentLoaded', function () {
    const startElement = document.getElementById('start');
    const endElement = document.getElementById('end');
    const boundaries = document.querySelectorAll('.boundary');
    let test =0
    

    startElement.addEventListener('click', function() {
        boundaries.forEach(function(boundary) {
            boundary.classList.remove('youlose');
            
        });
    });

    endElement.addEventListener('mouseover', function() {
        if (test ==0){
            window.alert('You win!');
        }else{
            window.alert('You lose ' + test + ' tatch');
        }
       
    });

    boundaries.forEach(function(boundary) {
        boundary.addEventListener('mouseover', function() {
            test= test+1;
            console.log(test);
            boundaries.forEach(function(item) {
               item.classList.add('youlose');
            });
             
        });

        boundary.addEventListener('mouseout', function() {
            boundaries.forEach(function(item) {
                item.classList.remove('youlose');
               
            });
        });
    });
});

