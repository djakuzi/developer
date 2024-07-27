import iphoneIMG from '../../public/Portfolio/Projects/iphone.png'
import cryptoIMG from '../../public/Portfolio/Projects/сrypto.png'
import feedbackIMG from '../../public/Portfolio/Projects/feedback.png'
import foodclubIMG from '../../public/Portfolio/Projects/foodclub.png'
import textAnalysisIMG from '../../public/Portfolio/Projects/textAnalysis.png'
import magazineIMG from '../../public/Portfolio/Projects/magazine.png'
import privateIMG from '../../public/Portfolio/Projects/private.png'
import { ProjectsCardProps } from '../components/ProjectsCard/ProjectsCard.props'



export const DATA_PROJECTS: ProjectsCardProps[] = [
    {
        "id": 1,
        "sort": 'in developing',
        "img": privateIMG,
        "name": "Мессенджер",
        "version": 'В разработке',
        "addition": "Будущий конкурент Telegram 😂. Проект в настоящее время разрабатывается.",
        "link": 'https://djakuzi.github.io/private/',
        "technologies": ["React", "TypeScript", "FireBase", "CSS", "Сборщик Vite", "Redux Toolkit", "React Router"],
        "possibilities": [ "Вход через Google", "Логин/регистрация на ресурсе", "Добавление аватара", "Изменение профиля", "Обмен сообщениями с другими людьми", "Добавление друзей", "Создание постов", "Список Новостей" ],
    },
    {
        "id": 3,
        "sort": 'ready',
        "img": textAnalysisIMG,
        "name": "Анализ текста",
        "version": 'Последняя версия',
        "addition": "Проект был создан в рамках изучения React + TypeScript",
        "link": 'https://djakuzi.github.io/textAnalysis/',
        "technologies": ["React","СSS", "TypeScript", "Сборщик Vite", "Axios",  "React Router"],
        "possibilities": ["Адаптив", "Взаимодейтсвие со сторонним API", "Корректировка текста", "Анализ текста" ],
    },
    {
        "id": 3,
        "sort": 'ready',
        "img": magazineIMG,
        "name": "Магазин гаджетов",
        "version": 'Последняя версия',
        "addition": "При использовании мобильной версии на Safari следут убрать нижнюю панель. Проект был создан в рамках изучения React + TypeScript.",
        "link": 'https://djakuzi.github.io/Megazine/',
        "technologies": ["ReactJS","CSS", 'TypeScript',"Сборщик Vite", "Axios","React Observer", "Redux Toolkit", "React Router"],
        "possibilities": ["Адаптив", "Логин/регистрация на ресурсе", "Изменение профиля", "Просмотр своих заказов", "Корзина", "Загрузка гаджетов с сервера", "Сортировка гаджетов", "Пагинация страниц",  "Анимации"],
    }, 
    {
        "id": 4,
        "sort": 'in developing',
        "img": iphoneIMG,
        "name": "Имитация Айфона",
        "version": "Разрабатывается",
        "addition": "Поддержка браузера: Google, Yandex. Стабильная работа только на компьютерной версии.",
        "link": 'https://djakuzi.github.io/testIphone/',
        "technologies": ["HTML", "CSS","JavaScript"],
        "possibilities": ['Возможности описаны в самом ресурсе'],
    },
    {
        "id": 5,
        "sort": 'ready',
        "img": cryptoIMG,
        "name": "Crypto Pay",
        "version": 'Последняя версия',
        "addition": "Данный проект был реализвоан в рамках соревнований осенью 2023 года, организованный создателями криптомонеты SEND. Цель этих соревнований заключалась в дальнейшем использовании самого лучшего макета. ",
        "link": 'https://djakuzi.github.io/crypto/public/',
        "technologies": ["HTML", "SCSS","JavaScript"],
        "possibilities": ["Адаптив", "Анимации", "Слайдер", "Светлая/Темная тема"]
    },
    {
        "id": 6,
        "sort": 'ready',
        "img": feedbackIMG,
        "name": "Сервис отзывов",
        "version": 'Последняя версия',
        "addition": "Проект был создан в ходе написания дипломной работы на тему 'Совершенствование web-сервиса организации ООО ТВИНС(WebCanape)' ",
        "link": 'https://djakuzi.github.io/feedback/',
        "technologies": ["ReactJS","CSS", "Сборщик Vite", "Axios","React Observer"],
        "possibilities": ["Адаптив", "Загрузка отзывов с сервера", "Сортировка отзывов", "Ленивая загрузка", "Анимации" ],
    },    
    {
        "id": 7,
        "sort": 'ready',
        "img": foodclubIMG,
        "name": "Онлайн пицца",
        "version": 'Последняя версия',
        "addition": "Проект был создан в рамках изучения React + TypeScript",
        "link": "https://djakuzi.github.io/FoodClub/",
        "technologies": ["ReactJS","CSS","Сборщик Vite","TypeScript","Axios","React Observer", "Redux Toolkit", "React Router"],
        "possibilities": ["Адаптив", "Логин/регистрация на ресурсе", "Корзина", "Загрузка пицц с API", "Поиск пицц", "Анимации" ],
    }
]
