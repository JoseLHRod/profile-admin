import Event from '../models/EventModel.js';

export const getEvents = async (req, res) => {
    try {
        const response = await Event.findAll({
            attributes: ['eeid', 'event_name','date_of_start', 'date_of_end', 'event_pic']
        });
        res.status(200).json(response);
    } catch (error) {
        res.status(500).json({msg: error.message});
    }
}

export const getEventById = async (req, res) => {
    try {
        const response = await Event.findOne({
            attributes: ['eeid', 'event_name','date_of_start', 'date_of_end', 'event_pic'],
            where: {
                eeid: req.params.id
            }
        });
        res.status(200).json(response);
    } catch (error) {
        res.status(500).json({msg: error.message});
    }
}

export const createEvent = async (req, res) => {
    const{event_name,date_of_start, date_of_end, event_pic} = req.body; 

    try {
        await Event.create({
            event_name,
            date_of_start,
            date_of_end,
            event_pic
        });
        res.status(201).json({msg: 'Event Registered'});
    } catch (error) {
        res.status(400).json({msg: error.message});
    }
}

export const updateEvent = async (req, res) => {
    const event = await Event.findOne({        
        where: {
            eeid: req.params.id
        }
    });

    if(!event) return res.status(404).json({msg: "Event not found..."});
    const{event_name,date_of_start, date_of_end, event_pic} = req.body;
    
    try {
        await Event.update({
            event_name,
            date_of_start,
            date_of_end,
            event_pic
        }, {
            where: {
                id: event.id
            }
        });
        res.status(200).json({msg: 'Event Updated'});
    } catch (error) {
        res.status(400).json({msg: error.message});
    }
}

export const deleteEvent = async (req, res) => {
    const event = await Event.findOne({        
        where: {
            eeid: req.params.id
        }
    });

    if(!Event) return res.status(404).json({msg: "Event not found..."});
    
    try {
        await Event.destroy({
            where: {
                id: event.id
            }
        });
        res.status(200).json({msg: 'Event Deleted'});
    } catch (error) {
        res.status(400).json({msg: error.message});
    }
}