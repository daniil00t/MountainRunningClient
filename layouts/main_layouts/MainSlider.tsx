import Link from "next/link"
import classes from "../../styles/layouts/MainSlider.module.scss"

const MainSlider = () => {
	return(
		<section className={classes.main_slider}>
			<div className={classes.main_slider_content}>
				<article className={classes.main_slider_content_article}>
					<h2 className={classes.main_slider_content_article__header}>SkiMo Running</h2>
					<p className={classes.main_slider_content_article__description}>Cерия индивидуальных трейловых забегов вокруг городских водоемов в твоем городе</p>
					<Link href="/about"><a className={classes.main_slider_content_article__button}>Подробнее</a></Link>
				</article>
			</div>
		</section>
	)
}

export default MainSlider