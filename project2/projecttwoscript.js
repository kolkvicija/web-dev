document.addEventListener('DOMContentLoaded', () => {
   
    document.querySelectorAll('.accordion-item .accordion-header').forEach(header => {
        header.addEventListener('click', () => {
            header.nextElementSibling.classList.toggle('active');
        });
    });

    
    document.querySelectorAll('.toggle-btn').forEach(button => {
        button.addEventListener('click', () => {
            const target = document.getElementById(button.getAttribute('data-target'));
            target.style.display = target.style.display === 'block' ? 'none' : 'block';
        });
    });

    
    const themeToggleBtn = document.getElementById('theme-toggle');
    themeToggleBtn.addEventListener('click', () => {
        document.body.classList.toggle('dark-theme');
        document.body.classList.toggle('light-theme');
    });
});



  


