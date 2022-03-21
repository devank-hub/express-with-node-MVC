import * as model from '../models/friends.model.js';

function postFriends (req, res) {
    if(!req.body.name) {
        return res.status(400).json({
            error: 'Name is required'
        });
    }
    const newFriend = {
       name: req.body.name,
       id: model.friends.length + 1
    }
    model.friends.push(newFriend);
    res.json(newFriend);
}

function getFriends (req, res) {
    res.json(model.friends);
}

function getIndividualfriends (req, res) {
    const friendID = +req.params.friendID; //+ sign for making it number
    const friend = model.friends[friendID];
    if(friend){
        res.status(200).json(friend);
    } else {
        res.status(404).json({
            error: 'Friend not doesn\'\t exist'
        });
    }
}

export { postFriends, getFriends, getIndividualfriends };