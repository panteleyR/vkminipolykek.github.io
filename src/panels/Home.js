import React from 'react';
import PropTypes from 'prop-types';
import Panel from '@vkontakte/vkui/dist/components/Panel/Panel';
import Button from '@vkontakte/vkui/dist/components/Button/Button';
import Group from '@vkontakte/vkui/dist/components/Group/Group';
import Cell from '@vkontakte/vkui/dist/components/Cell/Cell';
import Div from '@vkontakte/vkui/dist/components/Div/Div';
import Avatar from '@vkontakte/vkui/dist/components/Avatar/Avatar';

import polykekLogo from '../img/mospolytech-logo-white.svg';
import polykekMainBG from '../img/fit_banner.jpg';
import polykekSpiral from '../img/spiral.png';
import polykekLoad from '../img/mospolytech-logo-hero-white.png';
import polykekFavicon from '../img/favicon.ico';
import './Persik.css';

const getVkGroup = function () {
	window.open('https://vk.com/moscowpolytech');
};
const goToProgramm = function () {
	window.open('https://new.mospolytech.ru/postupayushchim/programmy-obucheniya/');
};
const goToPostup = function () {
	window.open('https://new.mospolytech.ru/postupayushchim/priem-v-universitet/pravila-priema/');
};
const goToAnother = function () {
	window.open('https://new.mospolytech.ru/fakultety-i-instituty/');
};

const Home = ({ id, go, fetchedUser }) => (
	<Panel id={id}>
		<Group>
			<div className="bg-kek">
				<div className="firstSec">
					<div className="header"> <img src={polykekLogo} alt=""/></div>
					<div className="content">
						<div className="title">Факультет информационных технологий</div>
					</div>
					<img className="bg-img" src={polykekMainBG} alt=""/>
				</div>

				<div className="educ">
					<div className="title">Мы знаем как сделать учебу <img className="fav" src={polykekFavicon} alt=""/> увлекательной</div>
                    <div className="content">
						<div>Образовательные программы созданы совместно с профессионалами из Ассоциации Интернет Разработчиков, 1С, Autodesk, Mail.ru, Лаборатории Касперского, Яндекса и других ведущих ИТ-компаний, поэтому студенты получают самые актуальные знания и легко находят работу уже во время учебы на старших курсах.</div>

						<div>Мы оперативно реагируем на изменения ИТ-рынка и каждый год вносим изменения в учебные планы, а 30% наших преподавателей – руководители и сотрудники ведущих IT-компаний.</div>

						<div>Особое внимание уделяется развитию прикладных навыков – работа над реальными проектами является обязательной частью учебного процесса, начиная с первого семестра. Каждый семестр представители деловой среды формируют пакет заданий, поэтому у каждого выпускника за плечами как минимум 8 готовых ИТ-проектов и опыт работы с индустриальным заказчиком. Или студент может развивать свой стартап, как это сделали студенты из проекта GreenPL</div>

						<div>Вместе с тем мы понимаем, что для успешной карьеры только профессиональных навыков уже недостаточно, поэтому активно развиваем коммуникативные и предпринимательские навыки (soft skills). Кроме того, начиная с первого семестра, вы можете проходить бесплатное обучение на сертифицированных курсах и программах 1С, Cisco, Microsoft, Digital Design и других. Выпускникам курсов выдаются международные сертификаты.</div>

						<div>Учиться у нас интересно: экзамены по прикладным дисциплинам проходят не по теоретическим билетам, а в форме решения реальных кейсов от ИТ-компаний. Например, нужно за один или несколько дней разработать сложный веб-сайт, мобильное приложение, или собрать и запрограммировать робота.</div>
					</div>
				</div>

				<div className="naprav">
					<img className="bg" src={polykekLoad} alt=""/>
					<div className="title">Направления подготовки Факультета информационных технологий</div>
					<div className="sub-title">Бакалавриат:</div>
					<div className="list">
						<div>- 10.05.03 Информационная безопасность автоматизированных систем</div>
						<div>- 01.03.02 Прикладная математика и информатика (Большие и открытые данные)</div>
						<div>- 09.03.01 Информатика и вычислительная техника (Веб-технологии, Интеграция и программирование в САПР, Программное обеспечение информационных систем, Киберфизические системы)</div>
						<div>- 09.03.03 Прикладная информатика (Большие и открытые данные)</div>
						<div>- 10.03.01 Информационная безопасность</div>
					</div>
					<div className="sub-title">Магистратура:</div>
					<div className="list">
						<div>- 01.04.02 Прикладная математика и информатика (Системная аналитика больших данных)</div>
						<div>- 09.04.01 Информатика и вычислительная техника (Компьютерная лингвистика и искусственный интеллект, Медицинские интеллектуальные системы)</div>
						<div>- 10.04.01 Информационная безопасность</div>
						<div>- 27.04.04 Управление в технических системах (Роботизированные беспилотные системы, Эргономический анализ интерфейсов и перспективных технических систем)</div>
					</div>
				</div>

				<div className="next-step">
					<div className="el" onClick={goToProgramm}>
						Выбрать <div>программу</div>
						<img className="uzor" src={polykekSpiral} alt=""/>
					</div>
					<div className="el" onClick={goToPostup}>
						Узнать, как
						<div>поступить</div>
					</div>
					<div className="el" onClick={goToAnother}>
						Другие факультеты
						<div>и институты</div>
					</div>
				</div>

				<div className="contacts">
					<div className="title">Позвоните или напишите
						<div>нам</div>
					</div>
					<div className="content">
						<p>Телефон: +7 (495) 223-05-23</p>
						<p>E-mail: priem@mospolytech.ru</p>
					</div>
					<div className="links">
                        <div className="link-button" onClick={getVkGroup}>Сообщество в ВК</div>
					</div>
				</div>
			</div>
		</Group>
	</Panel>
);


Home.propTypes = {
	id: PropTypes.string.isRequired,
	go: PropTypes.func.isRequired,
	fetchedUser: PropTypes.shape({
		photo_200: PropTypes.string,
		first_name: PropTypes.string,
		last_name: PropTypes.string,
		city: PropTypes.shape({
			title: PropTypes.string,
		}),
	}),
};

export default Home;
