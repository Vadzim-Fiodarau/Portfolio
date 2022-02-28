import styles from './Skills.module.css'
import styleContainer from '../common/styles/Container.module.css'
import {Skill} from "./skill/Skill";
import {Title} from "../common/components/title/Title";

export const Skills = () => {
    return (
        <div className={styles.skillsBlock}>
            <div
                className={`${styleContainer.container} ${styles.skillsContainer}`}>
                <Title title={'Skills'}/>
                <div className={styles.skills}>
                    <Skill title={'HTML5'}
                           description={'Special language used to create markup for a web application.'}
                           img={'https://www.optima.com.mk/assets/images/tech/html5.png'}
                    />
                    <Skill title={'CSS3'}
                           description={'Language for describing the appearance of a document written using a markup language..'}
                           img={'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAjVBMVEUVcrb///8AZ7He5/EAarIAbbS3y+IAbrQAabKCqNBnmMgAZrEPcLWYt9f2+v3w9/u70+cZdbjq8viQtdemxeDj7vZAhL7G2utrn8yfwN2Fr9RKjMMAYK7R4e8febp3ptBUksbD1edCisIzgL1rnMo6gLyKs9aqw95ZlsjN3u12os2avduuy+N/rNLU5fEXrjRiAAAMk0lEQVR4nN2db0PiSBPEISQmKyN/oqDAASqui4p+/493Cd7z7J7p6prMZBJz9W5fyPKDMKl01/QMhv91Db78Ox/1XTkhfP4r6rf+eiaEN9mg38puCOGs94QzQrjtO2G0JYR51PVb9FTEVpo8NV2/Ry+ZlBFOd12/R0/tpoRwsuz5d/hzQgiH92nXb9JL6f1XoArhZc8JnyjhPun6TXop2VPC554TfjVtVcJV3PWb9FK8ooQ9t20V01Yl7Llty76atirhR89/hyNKuBj0+ZZvBgtKOJ13/S69NP9q2qqEw0Ovv8NDhadK2GtjapYWhL02plVbKhDe9ZkwubMgXPf5dlE1bQJhr21b/MuC8KLXhBXTJhDe9tm2ZbcWhB+9JvywIOx1PbFSS5QIh70mrOIIhEl/TY1JrAh3PSas2lKJcNNfU5NurAh7bNvSqmmTCHts2wTTJhH22LZVK20i4anHhCcrwh7btuzBivCD3fJN3JXYGhhVTZtEmI8J4GZ20ZGeCOK4atokwgm5SoVKQVtibaP4a/NwKBIOSRvY/AxOgnQk3+FO+BuJkFTbjPQ67YjYLaHSJhOyattcuNrb0U/9sxd/PxLhK/mkTKVy3pIm5PeTvgp/JBEy25YIa3Iryuf6d5ishT+SCK8JYfQSGgVoYXTC+E34I4mQpfeqXciW9EH8ZCW1V0oiZG1gyd+2ohfitiTTJhJuyQtJzyitiD0TRJX26FAmXJAXqiY6WtIbe2PSIi8R5qQNnF6GRgEii7wRb9QSIUvvdWZMyY26mtorJRFS27YUDG4bIok00bTJhKzaJn5WLYi8L/naEgnZZ5V2QzghEQN5fRAJ2WOY0B1oQ1Nm2sQ1XiRktq0aPGpFObtZXEt/JRJ+U9s2IuUV0bTJhA+MUHyp4Lp1MW0y4QshTK6CkiAx0xaLzzwiIUvvJT/CogCxYnwq2VKZkD2HVcPUrYgsgMaIS7xIOCHLstTEakE/mC0VrZZIyOqJA5OEUyx6r1IutURESNN7Jpywr6d2uQZhl+k9qcv5KVaplj8amfCuwyapWDA7i93D5AdzmZDZtpCCVaAJsTSyaQOEvzpskmYXgHDBLE01tYcJu9x0kaFqLK20yW5ZJmQOMKRgRZ197FE1tYcJaRs4nHBX5BcjFE0bIJySH3VAmep+gn90RZa/sfyHMuGwO0LgTIa88jCW/wwQdrdxRoqmfYqZtnktwu62lWBXz0wb+GgAYXe2DZs2sl0J+VlAyKrL4YRNG3loRd0UQNidbRP2E3yKzUIApg0Rdpfei5FpG7EsDfCzgLC79B5wJsPhltWhhNSeQthdek+Kpp3FSpzoowGEo85smxRNO+vkZtoQYXebLoAzsUiIALcHCKdkaQ4maT/Bp95JpW1Qj3DS1ZYEbNpI8tIcQNsWEHrtlfWpNcbQtBGbZR7B3yFCD9tmlj88hG747DNPjzUJPWxbmDAKbQBLqT2NkPyu1f8rSFTDKbWnEbJwjiK8WPhoQTaciak9jZDdXzWBR1E/MQ+CTBskZB5JkTEh4jas/Af9LCIceRBWRqY1IfYskAHThgk9HhCDZIjJwmBSVIREhGzp0iT30z3llNrTCH1m78mZCE+xeP0O/fgRoY9ty9Cy5qOjU3tUI/TYK4sqJl56dI0WQEJWf9UIA9g29rCD4yGQ0GP2XogM8YTVEt9rE3rUE0OEUaYsXQ9jWpCQ9bIU4V+9u5hpw6sbJPSxbQEyxMy0xQ+1CVl6TyMMsLmNpvZg5BUSsh04msR9D35iRfjqrD1KmHsYU1S69BBrACfwhwEJfUacBLBtr8SWpvAvMaHHdMEAto3ua3Ug9DCmsKLgLlKHUm5QmPDenRAbDGexTC+qJWqEPrYNVfbcxTJt2ApjQg/bZnaXjkLtUUqIs/WY0Ce9Z1I3jREhyyWC1J5O2EV6Txgo9ylqS/EeF0zYRXovRjUslktUtpdjwi7awNDusQtqjF0UJmSXfgCZFJWT2LPcGBehMeGw/TiGMei9sM0ksHOsErZ/lgfu6ZCbszZuRSFsf2QyLn+QWmKKGsA6oUe1zVE4tccawErtSyFs/6QLPKyB1BK1zXQKIT3pIkVxA1dCmNqbkEc5rQatELI2cPp6Jcv5y4ddTjbsX5tFohDS4g9ySgvXOynscn6QJUF75FYIaQEPPec6ewWY2mOHbmgzgRRCZttwmte1xAP2E1jkEpXinkLIqm3O2+jwG0UvyLbPJ0qBViFkIwxw5eDR8U4Ky0lsWdeK7AohTSFBB+J4KhYuJzHThlJ7hJA1JfHrki3JSDhMRT4ytdmlEbIaJbw2HEs8CSxgsWmCWsNSIyQjk3FuxjHpD00bO9BPre1phCy9B9dox8gYvMGyYAi+bxFCZtvgfZZVVRAhcia5y6w9G0IatIK2zY0QmrYFG5EHy6yEkG26gH7XsTMHm3JsRB7cOswI2S4V+MzieCpWjFYuVmlLtJlHGuGI7aVCz53MK8jC+2OJadMHqmqELL2HUzpOgSrsIFilTc0NaIR05Cu2bS7fIX455pHUwcYaIW1LwuKf01wN7OTZZhJ1OLVKyMwSLOCux3HNs6GNiTNX06ZnsFRCVk+EtfTJ9vp+Hlk/CJskmh/fcLKYPeTAB1VKSHfAa2tYPns/WHyVJo2j5fpWTVE5p/YoIQuxVE5qr1Ce7tIMUxZ0mXk6sQQVq/vowQiV8KKJ2Xvbq808Ey5Yk2TzzZvNfEJWu1NNm07IvIRtbia/XT9mfx7dUH55y/cHy/ib04BkO0L20nWGQuen1/n5Z2nSZGyebmqE++jYFvVCUAnZM0Ld3MxotUmzdHlVcz8GHduiBgVVQvYTd5i9N32pnz29Ik8ASgN4SAhZikVr2zUoWmtQ/1onJE9BLZ104TZr73/SCdnAFKV93qDYVgv9StIJ2acnnevSvNjYFn3zg05IT65p5SwP4m/Jiq4TMtsmHIrZvKasj6lPxNUJWc8nRtWxJjVyOdXit3RCetKF6ggbEtsXQdyxTtikbXPWzLUw/SmdkLl6tZzelFgXBM57+ZROSG3bZQu3iz2LKejvgRCyyXRmd3nT/PaR31rM9gdWmZQHJP9fOqHFZLriYeGwfwjyVb5cL4307PzlQyYjHAihTWnXmCQab95GjVLmN8csSmzmALExHITQuiOfxtHuddbMnrX89n2ZZbblSPYIRwjJdqN/ySSZ2Tz7HgyxfdvUqEMO+Ah8QkjTe18g0yQbHE+ubjU/3c3jurVktnOcEDp05I3Jxof1Q91H+cnL83JMDxoVFJOjKAih4+y9cxF7ZX8bGa0u612af4iVNAmhY0d+cG5EJIf9jH+V0+KWl2TueWR2JAwh9BjiUlImcba80t7B9moZxX7H1cOxLXaE7KQLG8pocHcjrT2LYl1x+uX9+/XZiZqEMG9kS0IaJ4/v/yojTotbXuJNdxbbGk8I3TryVRW+Jxvc//q8oEarcyejoVf+SbwUIWR1rlrvJY3H8/fTflC7faqJjqhghE2PTE6yhvc4GLw/1o6QpPe6V6I2gC0IPWbvtSNaZmCEHrP32hEtFTHCi+9OSPvQjLC7kcmWUlN7NoTbb/87ZGV3Rrj45oR41p4tYWcjky3Fx1Aywg5PurCSoaNEKWFXQ6EtxcfBUkLXHT4tiY/0pYQk+di19NSeFeE3t228N0QJv7ltg1uH7Ql9Ria3IN6jpYRdHsFmITjvxZ6QbcHtWHDrsD2h88bsdkQawDaEXR5QZiF44EcdwibrRs3KpFnWAOHL86Oxbua1qDJFfa8E/O0Jh+fq9M6/Ot2kTBbZpqitCAtNPq42Y95UbwPOJFF0FPsEXoRnytl+59MlagKvDEasa2XN6hCW+lgdxb0FbajMCjzVbjDXJRyWUe31sv0FNsmy++utQ97DgbBUfnpKoqQlynLjkLFptjZJWGp79TgIf8GebworjxyrB2Gh/GJ/CHgbOW+tWd/6pXT8CAtNRqv7zDVloNEVN4Xkyf6mEI7wrNm7V9igipdmyeG6mYNAmiEclr7nuMuSBijLS/Nwd9HY0PPGCIflbeR5Y59Hk1VcmoXZbDIE2CRhqenpNXW8WZZhqt2PWdNBzqYJS328bereRspA3Py+gXWlqhCEhfKH/TK2D1BmyWZ9GyhQHYiw1GJ1mfLbSJpE8zu6FdhDAQkLTW6fD8raw1NhDSgsYam8eHwW9nMXN4XkcOdqNmsoPOHwcwBBccH++eVFg8u3kCH/32qFsNS0eHz+Z6dzmbDVRww0qdYISxUWNo0Hx5DrSlWtEhaaBl5XqmqbsH399wn/Bgxy88/+HUH6AAAAAElFTkSuQmCC'}
                    />
                    <Skill title={'Sass'}
                           description={'Мetalanguage required to increase the level of abstraction of CSS code and simplify cascading style sheet files.'}
                           img={'https://sass-scss.ru/assets/img/logos/logo-b6e1ef6e.svg'}
                    />
                    <Skill title={'JavaScript'}
                           description={'Scripting programming language with dynamic typing that defines the behavior of a web application.'}
                           img={'http://www.fabii.ca/blog/wp-content/uploads/2016/08/js-1.png'}
                    />
                    <Skill title={'TypeScript'}
                           description={'Programming language that is a web application development tool that solves typing problems and extends the capabilities of the JavaScript language.'}
                           img={'https://procoders.tech/wp-content/uploads/2020/11/Typescript_logo_2020.svg'}
                    />
                    <Skill title={'React'}
                           description={'Library for developing user interfaces and creating one-page applications using components and Virtual DOM.'}
                           img={'https://fslightbox.com/img/environments/react.png'}
                    />
                    <Skill title={'Redux'}
                           description={'Library for managing the state of the application using tools that allow you to build the architecture of a web application and greatly simplify the transfer of data.'}
                           img={'https://seeklogo.com/images/R/redux-logo-9CA6836C12-seeklogo.com.png'}/>
                    <Skill title={'StoryBook'}
                           description={'Tool for creating separate parts of the interface separately from the main application, which simplifies testing and allows you to debug a component with different data.'}
                           img={'https://iconape.com/wp-content/files/qa/371510/svg/371510.svg'}
                    />
                    <Skill title={'TDD'}
                           description={'software development approach in which test cases are developed to specify and validate what the code will do'}
                           img={'https://josephephillips.com/assets/img/blog/tdd.png'}
                    />
                    <Skill title={'GIT'}
                           description={'Distributed version control system that allows you to create repositories to manage collaborative development and, if necessary, revert to earlier versions of the application.'}
                           img={'https://git-scm.com/images/logos/downloads/Git-Icon-1788C.png'}
                    />

                </div>
            </div>

        </div>
    )
}