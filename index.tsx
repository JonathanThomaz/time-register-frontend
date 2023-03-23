import React, { useEffect, useState } from 'react';
import { Container } from 'components/Container';
import {
  ActionsContainer,
  GridCards,
  PageHeader,
  Subtitle,
  Title
} from './styles';
import { Button } from 'components/Button';
import { BlocksIcon, ListIcon } from 'assets/icons';
import { Input } from 'components/Input';
import instance from 'services/index';
import { IChatBot } from 'interfaces';
import { ChatBotCard } from 'components/ChatBotCard';
import { Divider } from 'components/Divider';
import { LocalStorageData } from 'types';
import { getRandomColor } from 'utils';

const MyChatbots = () => {
  const [organizeType, setOrganizeType] = useState<'list' | 'block'>('block');
  const [chatBots, setChatBots] = useState<IChatBot[] | null>(null);
  const [favoriteList, setFavoriteList] = useState<string[]>([]);
  const [filteredChatBots, setFilteredChatBots] = useState<IChatBot[] | null>(
    chatBots
  );
  const [orderBy, setOrderBy] = useState<'name' | 'creation'>('name');

  useEffect(() => {
    const handleFetch = async () => {
      const response = await instance.get(`bots?Filters[orderBy]=${orderBy}`);
      setChatBots(response.data);
      setFilteredChatBots(response.data);
    };
    const localList = localStorage.getItem(LocalStorageData.SCL_FAVORITE_LIST);
    if (localList) setFavoriteList(JSON.parse(localList));
    handleFetch();
  }, [orderBy]);

  const handleFavorite = (name: string) => {
    const localList = localStorage.getItem(LocalStorageData.SCL_FAVORITE_LIST);
    let newList;

    if (localList) {
      const list = [...JSON.parse(localList)];
      if (list.includes(name)) {
        newList = list.filter(item => item !== name);
      } else {
        newList = [...list, name];
      }
    } else {
      newList = [name];
    }
    localStorage.setItem(
      LocalStorageData.SCL_FAVORITE_LIST,
      JSON.stringify([...newList])
    );
    if (favoriteList.includes(name)) {
      setFavoriteList(prev => prev.filter(item => item !== name));
    } else {
      setFavoriteList(prev => [...prev, name]);
    }
  };

  return (
    <Container>
      <PageHeader>
        <Title>My chatbots</Title>
        <ActionsContainer>
          <Input
            placeholder="Search"
            onChange={e =>
              chatBots &&
              setFilteredChatBots(
                chatBots.filter(item =>
                  item.name.toLowerCase().includes(e.target.value.toLowerCase())
                )
              )
            }
          />
          <Button onClick={() => setOrderBy('name')}>Order by name</Button>
          <Button onClick={() => setOrderBy('creation')}>
            Order by creation
          </Button>
          <Button
            isButtonIcon
            isActive={organizeType === 'block'}
            onClick={() => setOrganizeType('block')}
          >
            <BlocksIcon />
          </Button>
          <Button
            isButtonIcon
            isActive={organizeType === 'list'}
            onClick={() => setOrganizeType('list')}
          >
            <ListIcon />
          </Button>
        </ActionsContainer>
      </PageHeader>
      {favoriteList && (
        <>
          <Subtitle>Favorites</Subtitle>
          <GridCards type={organizeType}>
            {filteredChatBots
              ?.filter(item => favoriteList.includes(item.name))
              .map(item => (
                <ChatBotCard
                  handleFavoriteClique={handleFavorite}
                  key={item.name}
                  isFavorite={true}
                  data={item}
                  type={organizeType}
                  randomColor={getRandomColor()}
                />
              ))}
          </GridCards>
        </>
      )}
      <Divider />
      <GridCards type={organizeType}>
        {filteredChatBots
          ?.filter(item => !favoriteList.includes(item.name))
          .map(item => (
            <ChatBotCard
              handleFavoriteClique={handleFavorite}
              key={item.name}
              data={item}
              type={organizeType}
              randomColor={getRandomColor()}
            />
          ))}
      </GridCards>
    </Container>
  );
};

export default MyChatbots;
