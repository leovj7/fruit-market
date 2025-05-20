"use strict";
document.addEventListener('DOMContentLoaded', () => {
    // Smooth scrolling para os links da navegação
    document.querySelectorAll('nav a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();

            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);

            if (targetElement) {
                // Scroll suave
                targetElement.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });

    // Adiciona uma classe para o header ao rolar (opcional, para um efeito "sticky header" com sombra)
    const header = document.querySelector('.header');
    if (header) {
        window.addEventListener('scroll', () => {
            if (window.scrollY > 50) { // Adiciona sombra após rolar 50px
                header.classList.add('scrolled');
            } else {
                header.classList.remove('scrolled');
            }
        });
    }

    // Validação de formulário de contato (simples)
    const contactForm = document.querySelector('.contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault(); // Impede o envio padrão do formulário

            const name = document.getElementById('nome').value;
            const email = document.getElementById('email').value;
            const message = document.getElementById('mensagem').value;

            // Simples validação: verifica se os campos não estão vazios
            if (name === '' || email === '' || message === '') {
                alert('Por favor, preencha todos os campos do formulário.');
            } else if (!validateEmail(email)) {
                alert('Por favor, insira um endereço de e-mail válido.');
            }
            else {
                alert(`Obrigado, ${name}! Sua mensagem foi enviada. Entraremos em contato em breve.`);
                contactForm.reset(); // Limpa o formulário
                // Aqui você integraria com um serviço de backend para realmente enviar o e-mail
                // Por exemplo, usando Formspree, Netlify Forms, ou um script customizado.
            }
        });
    }

    function validateEmail(email) {
        const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return re.test(String(email).toLowerCase());
    }
});

if (name && email && message && validateEmail(email)) {
    alert(`Obrigado, ${name}! Sua mensagem foi enviada.`);
    contactForm.reset();
}
