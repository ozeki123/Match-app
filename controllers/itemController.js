const Item = require('./itemController');

//Function to retrieve all items from database, sorted by data added
module.exports.get_items = (req, res) => {
    Item.find().sort({date:-1}).then(items => res.json(items));
}

module.exports.post_item = (req, res) => {
    const newItem = new Item(req.body);
    newItem.save().then(item => res.json(item));
}

module.exports.put_item = (req, res) => {
    Item.findByIdAndUpdate({_id: req.params.id}, req.body).then(function(item){
        res.json(item);
    })
}

module.exports.delete_item = (req, res) => {
    Item.findByIdAndDelete({_id: req.params.id}).then(function(item){
        res.json({success: true});
    })
}