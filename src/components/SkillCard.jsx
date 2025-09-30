import React from 'react';
import AnimatedWrapper from './AnimatedWrapper';

const SkillCard = ({ name, Icon, delay }) => (
    <AnimatedWrapper delay={delay} animationType="slide-up">
        <div className="p-6 bg-gray-900 rounded-2xl text-center hover:shadow-2xl hover:shadow-violet-400/30 transition duration-300 border border-gray-800 hover:scale-[1.03] cursor-pointer">
            <Icon className="w-8 h-8 mx-auto text-violet-400 mb-2" />
            <p className="text-white font-semibold">{name}</p>
        </div>
    </AnimatedWrapper>
);

export default SkillCard;