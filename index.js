const classDetails = document.querySelectorAll('.class-details');

classDetails.forEach(detail => {
    detail.addEventListener('mouseenter', () => {
        const previousTimeSlot = detail.previousElementSibling;
        if (previousTimeSlot && previousTimeSlot.classList.contains('time-slot')) {
            // Меняем фон для both .time-slot и .class-details
            previousTimeSlot.style.backgroundColor = 'lightgoldenrodyellow';
            previousTimeSlot.style.color = '#000000';
            detail.style.backgroundColor = 'lightgoldenrodyellow';
            detail.style.color = '#000000';
        }
    });

    detail.addEventListener('mouseleave', () => {
        const previousTimeSlot = detail.previousElementSibling;
        if (previousTimeSlot && previousTimeSlot.classList.contains('time-slot')) {
         
            previousTimeSlot.style.backgroundColor = '';
            previousTimeSlot.style.color = '';
            detail.style.backgroundColor = '';
            detail.style.color = '';
        }
    });
});
