export const UserCard = ({username}: {username?: string}) => {
    return (
        <div>
            username: {username ?? 'user'}
        </div>
    );
};