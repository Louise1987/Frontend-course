import React from 'react';
import '../styles/App.css';


const Number = () => {

		return (
			
			<div Name="calc-form__grid">
				<div className="calc-form__container">
					<div className="calc-form">
						<div className="calc-form__calculate-cal--prenumber left"></div>
						<textarea rows="1" cols="80" name="number"></textarea>
					</div>

					<div className="calc-form">
						<div className="calc-form__calculate-cal--prenumber right"></div>
						<textarea rows="1" cols="80" name="number"></textarea>
					</div>
				</div>

				<div className="calc-form__add-number">
					<div className="calc-form__number">
						<div className="calc-form__calculate-cal--prenumber left"></div>
						<textarea rows="1" cols="70" name="number"></textarea>
					</div>

					<div className="calc-form__box">
						<ul className="calc-form__calculate-lists">
							<a href="calc-form__plus" class="adding"><li>+</li></a>
							<a href="calc-form__minus" class="remove" ><li>-</li></a>
							<a href="calc-form__multiply" class="multi"><li>*</li></a>
							<a href="calc-form__divition" class="divide"><li>/</li></a>
							<a href="calc-form__procent" class="procenting"><li>%</li></a>
						</ul>
					</div>

					<div className="calc-form__number">
						<div className="calc-form__calculate-cal--prenumber right"></div>
							<textarea rows="1" cols="70" name="number"></textarea>
					</div>

				</div>

					<div className="calc-form__total-last">
					<a href="total" class="calc-form__total">=</a>
						<div class="calc-form__calculate-cal--total"></div>
					</div>

			</div>
	);
};

	export default Number;