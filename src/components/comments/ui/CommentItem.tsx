import React, {memo} from 'react';
import * as cls from './CommentItem.module.scss';

export interface Comment {
    avatar: string | any;
    name: string;
    city: string;
    text: string;
}

interface Props {
    comment: Comment;
    onClick?: () => void;
    onTouchStart?: (e: React.TouchEvent<HTMLDivElement>) => void;
}

export const CommentItem: React.FC<Props> = memo(({ comment, onClick, onTouchStart }) => {
    return (
        <div className={cls.comment} onClick={onClick} onTouchStart={onTouchStart}>
            <div>
                <div className={cls.nameUser}>
                    <div>
                        <img src={comment.avatar} className={cls.avatar} />
                    </div>
                    <div className={cls.nameAndCity}>
                        <div className={cls.name}>
                            {comment.name}
                        </div>
                        <div className={cls.city}>
                            {comment.city}
                        </div>
                    </div>
                </div>
            </div>
            <div className={cls.text}>
                {comment.text}
            </div>
        </div>
    );
});
