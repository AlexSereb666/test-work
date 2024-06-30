import React, { useState } from 'react';
import * as cls from './Comments.module.scss';
import avatarImg from '@/assets/images/avatar.png';
import {Comment, CommentItem} from './CommentItem';

// подразумевается, что эти данные должны приходить с бека //
// но раз бекенда нет, то хардкодим прямо тут //
const reviews: Comment[] = [
    {
        avatar: avatarImg,
        name: 'Константинов Михаил Павлович',
        city: 'Санкт-Петербург',
        text: 'Каждый из нас понимает очевидную вещь: перспективное планирование ' +
            'предоставляет широкие возможности для анализа существующих паттернов ' +
            'поведения. В своём стремлении улучшить пользовательский опыт мы упускаем, ' +
            'что активно развивающиеся страны третьего мира призваны к ответу.',
    },
    {
        avatar: avatarImg,
        name: 'Иван Иванов',
        city: 'Санкт-Петербург',
        text: 'Каждый из нас понимает очевидную вещь: перспективное планирование ' +
            'предоставляет широкие возможности для анализа существующих паттернов поведения. ' +
            'В своём стремлении улучшить пользовательский опыт мы упускаем, что активно ' +
            'развивающиеся страны третьего мира призваны к ответу.',
    },
    {
        avatar: avatarImg,
        name: 'Константинов Михаил Павлович',
        city: 'Самара',
        text: 'Каждый из нас понимает очевидную вещь: перспективное планирование предоставляет ' +
            'широкие возможности для анализа существующих паттернов поведения. В своём стремлении ' +
            'улучшить пользовательский опыт мы упускаем, что активно развивающиеся страны третьего ' +
            'мира призваны к ответу.',
    },
    {
        avatar: avatarImg,
        name: 'Константинов Михаил Павлович 2',
        city: 'Белгород',
        text: 'Ну 100% должен пройти тестовое задание:)) Никаких трудностей с ним не возникло.',
    },
    {
        avatar: avatarImg,
        name: 'Иван Иванов 2',
        city: 'Москва',
        text: 'Текст текст текст текст.',
    }
];

const Comments = () => {
    const [currentReviewIndex, setCurrentReviewIndex] = useState(0);

    const prevReviewIndex = (currentReviewIndex - 1 + reviews.length) % reviews.length;
    const nextReviewIndex = (currentReviewIndex + 1) % reviews.length;

    const selectReview = (index: number) => {
        setCurrentReviewIndex(index);
    };

    const goToPrevReview = () => {
        setCurrentReviewIndex(prevReviewIndex);
    };

    const goToNextReview = () => {
        setCurrentReviewIndex(nextReviewIndex);
    };

    const handleSwipeStart = (e: React.TouchEvent<HTMLDivElement>) => {
        const startX = e.touches[0].clientX;

        const handleSwipeEnd = (e: TouchEvent) => {
            const endX = e.changedTouches[0].clientX;
            const deltaX = endX - startX;

            if (deltaX > 50) {
                goToPrevReview();
            } else if (deltaX < -50) {
                goToNextReview();
            }

            document.removeEventListener('touchend', handleSwipeEnd);
        };

        document.addEventListener('touchend', handleSwipeEnd);
    };

    return (
        <div className={cls.comments}>
            <h2>
                Отзывы
            </h2>
            <div className={cls.container}>
                <button className={cls.navButton} onClick={goToPrevReview}>&lt;</button>
                <div className={cls.comment_1}>
                    <CommentItem comment={reviews[prevReviewIndex]} onClick={goToPrevReview}/>
                </div>
                <div className={cls.comment_2}>
                    <CommentItem comment={reviews[currentReviewIndex]} onTouchStart={handleSwipeStart}/>
                </div>
                <div className={cls.comment_3}>
                    <CommentItem comment={reviews[nextReviewIndex]} onClick={goToNextReview}/>
                </div>
                <button className={cls.navButton} onClick={goToNextReview}>&gt;</button>
            </div>
            <div className={cls.dots}>
                {reviews.map((review, index) => (
                    <div
                        key={index}
                        className={`${cls.dot} ${currentReviewIndex === index ? cls.active : ''}`}
                        onClick={() => selectReview(index)}
                    />
                ))}
            </div>
        </div>
    );
};

export default Comments;
