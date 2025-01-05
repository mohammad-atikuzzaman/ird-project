import React from 'react';
import Audio from './Audio';

const DuaCard = ({post}) => {
    const {id, cat_id, subcat_id, dua_id, dua_name_bn, dua_name_en, top_bn, top_en, dua_arabic, dua_indopak, clean_arabic, transliteration_bn, transliteration_en,translation_bn, translation_en, bottom_bn, bottom_en, refference_bn, refference_en, audio } = post;
    return (
        <article className='rounded-xl text-sm space-y-4 p-4 m-4 bg-white'>
            <h2 className='text-green-400'>{dua_name_bn} </h2>
            <p className='text-2xl'>{dua_arabic}</p>
            <p className='italic'>{transliteration_bn}</p>
            <p className='text-gray-600'>{translation_bn}</p>
            <p>{bottom_bn}</p>
            <p>{refference_bn}</p>
            <Audio audio={audio}/>

        </article>
    );
};

export default DuaCard;