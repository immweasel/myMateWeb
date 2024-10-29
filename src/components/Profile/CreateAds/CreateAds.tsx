import './CreateAds.css';
import TopWithArrow from "../Common/TopWithArrow";
import { useState, useRef } from 'react';
import InputMask from "react-input-mask";

interface IAd {
    title: string;
    date: string;
    aboutAppartment: string;
    budgetFrom: string;
    budgetTo: string;
    countFriends: string;
    ageNeighborFrom: string;
    ageNeighborTo: string;
    gender: string;
    animal: string;
    pictureName: string;
}

export default function CreateAds() {
    const file = useRef<FormData>(new FormData());
    const genders = ['Мужской', 'Женский', 'Любой'];
    const animals = ['Приветствуется', 'Не приветствуется'];

    const [newAd, setNewAd] = useState<IAd>({
        title: '',
        date: '',
        aboutAppartment: '',
        budgetFrom: '',
        budgetTo: '',
        countFriends: '',
        ageNeighborFrom: '',
        ageNeighborTo: '',
        gender: '',
        animal: '',
        pictureName: '',
    });

    const save = async () => {
        // Реализация функции сохранения объявления
        console.log(newAd);
    };

    const handleInputChange = (field: keyof IAd, value: string) => {
        setNewAd(prevData => ({ ...prevData, [field]: value }));
    };

    return (
        <div className="createAdsMain">
            <TopWithArrow link='/profile/myAds' />
            <div className="createAdsContent">
                <p className='createAdsTitle'>Создание объявления</p>
                <div className='createAdsColumn'>
                    <div className='createAdsLilColumn'>
                        <p className='createAdsSubtitle'>Название объявления</p>
                        <input
                            className='createAdsInput'
                            onChange={(e) => handleInputChange('title', e.target.value)}
                            value={newAd.title}
                        />
                    </div>
                    <div className='createAdsLilColumn'>
                        <p className='createAdsSubtitle'>Дата</p>
                        <InputMask
                            mask='99.99.9999'
                            className='createAdsInput'
                            onChange={(e) => handleInputChange('date', e.target.value)}
                            value={newAd.date}
                        />
                    </div>
                    <div className='createAdsLilColumn'>
                        <p className='createAdsSubtitle'>О квартире</p>
                        <input
                            className='createAdsInput'
                            onChange={(e) => handleInputChange('aboutAppartment', e.target.value)}
                            value={newAd.aboutAppartment}
                        />
                    </div>
                    <div className='createAdsLilColumn'>
                        <p className='createAdsSubtitle'>Бюджет на 1 человека</p>
                        <div className='createAdsLilLine'>
                            <input
                                className='createAdsInputLil'
                                placeholder='Бюджет от'
                                onChange={(e) => handleInputChange('budgetFrom', e.target.value)}
                                value={newAd.budgetFrom}
                            />
                            <p className='createAdsInputLilSymbol'>₽</p>
                            <input
                                className='createAdsInputLil'
                                placeholder='до'
                                onChange={(e) => handleInputChange('budgetTo', e.target.value)}
                                value={newAd.budgetTo}
                            />
                            <p className='createAdsInputLilSymbol'>₽</p>
                        </div>
                    </div>
                    <div className='createAdsLilColumn'>
                        <p className='createAdsSubtitle'>Количество гостей</p>
                        <input
                            className='createAdsInput'
                            type='number'
                            onChange={(e) => handleInputChange('countFriends', e.target.value)}
                            value={newAd.countFriends}
                        />
                    </div>
                    <div className='createAdsLilColumn'>
                        <p className='createAdsSubtitle'>Возраст соседа</p>
                        <div className='createAdsLilLine'>
                            <input
                                className='createAdsInputLil'
                                placeholder='Возраст от'
                                type='number'
                                onChange={(e) => handleInputChange('ageNeighborFrom', e.target.value)}
                                value={newAd.ageNeighborFrom}
                            />
                            <input
                                className='createAdsInputLil'
                                placeholder='до'
                                type='number'
                                onChange={(e) => handleInputChange('ageNeighborTo', e.target.value)}
                                value={newAd.ageNeighborTo}
                            />
                        </div>
                    </div>
                    <div className='createAdsLilColumn'>
                        <p className='createAdsSubtitle'>Пол</p>
                        <div className='createAdsLilLine'>
                            {genders.map((item, index) => (
                                <button
                                    key={index}
                                    className={`createAdsGenderButton ${newAd.gender === item ? 'createAdsGenderButtonSelect' : ''}`}
                                    onClick={(e) => {
                                        e.preventDefault();
                                        handleInputChange('gender', item);
                                    }}
                                >
                                    {item}
                                </button>
                            ))}
                        </div>
                    </div>
                    <div className='createAdsLilColumn'>
                        <p className='createAdsSubtitle'>Наличие животных</p>
                        <div className='createAdsLilLine'>
                            {animals.map((item, index) => (
                                <button
                                    key={index}
                                    className={`createAdsAnimalButton ${newAd.animal === item ? 'createAdsGenderButtonSelect' : ''}`}
                                    onClick={(e) => {
                                        e.preventDefault();
                                        handleInputChange('animal', item);
                                    }}
                                >
                                    {item}
                                </button>
                            ))}
                        </div>
                    </div>
                    <div className='createAdsLilColumn'>
                        <p className='createAdsSubtitle'>Фотографии</p>
                        <label className="input-file">
                            <input
                                type='file'
                                onChange={(e) => {
                                    if (e.target.files) {
                                        file.current.append('file', e.target.files[0]);
                                        handleInputChange('pictureName', e.target.files[0].name);
                                    }
                                }}
                            />
                            <div className="createAdsUplodaImageButton">
                                <p>{newAd.pictureName || 'Добавить фото'}</p>
                                {!newAd.pictureName && <hr className='createAdsUplodaImageButtonHr' />}
                            </div>
                        </label>
                    </div>
                </div>
                <button className='createAdsButtonSave' onClick={save}>Сохранить</button>
            </div>
        </div>
    );
}
